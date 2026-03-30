"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaSpotify } from "react-icons/fa";

const DISCORD_ID = process.env.NEXT_PUBLIC_DISCORD_ID;

export default function Presence() {
  const [presence, setPresence] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const ws = useRef(null);
  const heartbeatInterval = useRef(null);
  const reconnectTimeout = useRef(null);

  const connect = useCallback(() => {
    if (ws.current?.readyState === WebSocket.OPEN) return;

    ws.current = new WebSocket("wss://api.lanyard.rest/socket");

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      switch (data.op) {
        case 1: // Hello
          heartbeatInterval.current = setInterval(() => {
            if (ws.current?.readyState === WebSocket.OPEN) {
              ws.current.send(JSON.stringify({ op: 3 }));
            }
          }, data.d.heartbeat_interval);

          ws.current.send(
            JSON.stringify({
              op: 2,
              d: { subscribe_to_id: DISCORD_ID },
            }),
          );
          break;

        case 0: // Event (INIT_STATE or PRESENCE_UPDATE)
          setPresence(data.d);
          break;
      }
    };

    ws.current.onclose = () => {
      clearInterval(heartbeatInterval.current);
      reconnectTimeout.current = setTimeout(connect, 5000);
    };

    ws.current.onerror = () => {
      ws.current?.close();
    };
  }, []);

  useEffect(() => {
    connect();
    return () => {
      clearInterval(heartbeatInterval.current);
      clearTimeout(reconnectTimeout.current);
      ws.current?.close();
    };
  }, [connect]);

  const activities =
    presence?.activities?.filter((a) => a.type !== 4 && a.name !== "Spotify") ||
    [];
  const spotify = presence?.spotify;
  const user = presence?.discord_user;

  // Calculate dynamic height based on content
  const getExpandedHeight = () => {
    let height = 60; // base height for header
    if (spotify) height += 80;
    if (activities.length > 0) height += activities.length * 75;
    if (!spotify && activities.length === 0 && user) height += 24;
    return height;
  };

  return (
    <div
      className="fixed z-50 w-[min(280px,90vw)] sm:w-[min(300px,90vw)] origin-bottom-right scale-[0.75] sm:scale-100 bottom-6 sm:bottom-10 right-4"
    >
      <motion.div
        initial={{ x: 200 }}
        animate={{ x: isExpanded ? 0 : 200 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full rounded-[10px] shadow-2xl cursor-pointer overflow-hidden bg-slate-800/30 backdrop-blur-sm hover:bg-slate-700/50"
        style={{
          border: "1px solid #6b7280",
          padding: "0.625rem",
        }}
      >
        <motion.div
          animate={{ height: isExpanded ? getExpandedHeight() : 30 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative"
        >
          {/* Header */}
          <div className="w-full h-[30px] flex items-center ml-2">
            <div className="text-sm font-bold text-[#CCD6F5]">Right Now :)</div>
          </div>

          {/* Spotify section */}
          <AnimatePresence>
            {isExpanded && spotify && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2, delay: 0.05 }}
                className="rounded-md p-2.5 mt-3"
                style={{ backgroundColor: "rgba(30, 215, 96, 0.1)" }}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <FaSpotify className="w-3 h-3 text-[#1ed760]" />
                  <span className="text-[9px] uppercase tracking-wider text-[#1ed760] font-semibold">
                    Listening on Spotify
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <img
                    src={spotify.album_art_url}
                    alt={spotify.album}
                    className="w-10 h-10 rounded flex-shrink-0 select-none"
                    draggable={false}
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold truncate text-[#CCD6F5]">
                      {spotify.song}
                    </p>
                    <p className="text-[10px] truncate text-gray-400">
                      by {spotify.artist}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Activities */}
          <AnimatePresence>
            {isExpanded &&
              activities.map((activity, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{
                    duration: 0.2,
                    delay: 0.05 + (spotify ? 0.05 : 0) + i * 0.05,
                  }}
                  className="rounded-md p-2.5 mt-2"
                  style={{ backgroundColor: "rgba(196, 163, 236, 0.08)" }}
                >
                  <p className="text-[9px] uppercase tracking-wider mb-1.5 text-[#c4a3ec] font-semibold">
                    {activity.type === 0
                      ? "Playing"
                      : activity.type === 2
                        ? "Listening"
                        : activity.type === 3
                          ? "Watching"
                          : "Activity"}
                  </p>
                  <div className="flex items-center gap-2.5">
                    {activity.assets?.large_image && (
                      <img
                        src={
                          activity.assets.large_image.startsWith("mp:external")
                            ? `https://media.discordapp.net/external/${activity.assets.large_image.replace("mp:external/", "")}`
                            : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.webp`
                        }
                        alt={activity.name}
                        className="w-10 h-10 rounded flex-shrink-0 select-none"
                        draggable={false}
                      />
                    )}
                    <div className="min-w-0">
                      <p className="text-xs font-semibold truncate text-[#CCD6F5]">
                        {activity.name}
                      </p>
                      {activity.details && (
                        <p className="text-[10px] truncate text-gray-400">
                          {activity.details}
                        </p>
                      )}
                      {activity.state && (
                        <p className="text-[10px] truncate text-gray-400">
                          {activity.state}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>

          {/* No activities fallback */}
          <AnimatePresence>
            {isExpanded && !spotify && activities.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2, delay: 0.05 }}
                className="mt-3 ml-2 flex items-center gap-2"
              >
                <span className="text-sm">💤</span>
                <p className="text-xs text-gray-400">Just chilling</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
