// app/fcfs/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Play, RotateCcw } from "lucide-react";

interface Process {
  id: number;
  at: number;
  bt: number;
}

interface Result {
  ct: number[];
  tat: number[];
  wt: number[];
  gantt: { start: number; end: number; pid: number }[];
  totalWt: number;
  totalTat: number;
}

export default function FCFS() {
  const [processes, setProcesses] = useState<Process[]>([]);
  const [nextId, setNextId] = useState(1);
  const [atInput, setAtInput] = useState("");
  const [btInput, setBtInput] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  // Add new process
  const addProcess = () => {
    if (!atInput || !btInput) return;
    const at = Number(atInput);
    const bt = Number(btInput);
    if (bt <= 0) return;

    setProcesses([...processes, { id: nextId, at, bt }]);
    setNextId(nextId + 1);
    setAtInput("");
    setBtInput("");
  };

  // Delete process
  const deleteProcess = (id: number) => {
    setProcesses(processes.filter(p => p.id !== id));
  };

  // Reset everything
  const resetAll = () => {
    setProcesses([]);
    setNextId(1);
    setResult(null);
    setAtInput("");
    setBtInput("");
  };

  // FCFS Calculation (First Come First Served - Non-preemptive)
  const calculateFCFS = () => {
    if (processes.length === 0) return;

    // Sort by arrival time, then by ID (stable sort)
    const sorted = [...processes].sort((a, b) => a.at - b.at || a.id - b.id);
    const n = sorted.length;
    const ct = new Array(n).fill(0);
    const gantt: { start: number; end: number; pid: number }[] = [];
    let currentTime = 0;

    for (let i = 0; i < n; i++) {
      // If CPU is idle, wait until this process arrives
      if (currentTime < sorted[i].at) {
        currentTime = sorted[i].at;
      }

      const start = currentTime;
      const end = currentTime + sorted[i].bt;
      gantt.push({ start, end, pid: i });
      currentTime = end;
      ct[i] = end;
    }

    // Calculate TAT and WT
    const tat = new Array(n);
    const wt = new Array(n);

    sorted.forEach((proc, i) => {
      tat[i] = ct[i] - proc.at;
      wt[i] = tat[i] - proc.bt;
    });

    // Map back to original order (by ID)
    const origCT = new Array(processes.length).fill(0);
    const origTAT = new Array(processes.length).fill(0);
    const origWT = new Array(processes.length).fill(0);

    sorted.forEach((proc, sortedIdx) => {
      const origIdx = processes.findIndex(p => p.id === proc.id);
      origCT[origIdx] = ct[sortedIdx];
      origTAT[origIdx] = tat[sortedIdx];
      origWT[origIdx] = wt[sortedIdx];
    });

    setResult({
      ct: origCT,
      tat: origTAT,
      wt: origWT,
      gantt,
      totalWt: origWT.reduce((a, b) => a + b, 0),
      totalTat: origTAT.reduce((a, b) => a + b, 0),
    });
  };

  // Get process ID from sorted index
  const getProcessId = (sortedIndex: number) => {
    const sorted = [...processes].sort((a, b) => a.at - b.at || a.id - b.id);
    return sorted[sortedIndex]?.id || 1;
  };

  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          First Come First Served (FCFS)
        </motion.h1>

        {/* Input Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-slate-900/70 border border-slate-800 rounded-3xl shadow-[0_35px_65px_rgba(2,6,23,0.65)] p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">Add Processes</h2>

          {/* Add Task Input */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="number"
              placeholder="Arrival Time (AT)"
              value={atInput}
              onChange={(e) => setAtInput(e.target.value)}
              className="flex-1 px-6 py-4 border border-slate-700 bg-slate-900 text-white placeholder:text-slate-500 rounded-xl focus:border-cyan-400 focus:outline-none text-lg"
              min="0"
            />
            <input
              type="number"
              placeholder="Burst Time (BT)"
              value={btInput}
              onChange={(e) => setBtInput(e.target.value)}
              className="flex-1 px-6 py-4 border border-slate-700 bg-slate-900 text-white placeholder:text-slate-500 rounded-xl focus:border-cyan-400 focus:outline-none text-lg"
              min="1"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addProcess}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-lg hover:shadow-[0_20px_45px_rgba(45,212,191,0.4)]"
            >
              <Plus size={24} />
              Add Task
            </motion.button>
          </div>

          {/* Process List */}
          <div className="space-y-3 mb-8">
            {processes.length === 0 ? (
              <p className="text-center text-slate-500 py-8">No processes added yet. Add one above!</p>
            ) : (
              processes.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-cyan-400/40 transition"
                >
                  <div className="flex items-center gap-8 font-semibold">
                    <span className="text-xl text-cyan-300">P{p.id}</span>
                    <span className="text-slate-300">AT: <strong className="text-white">{p.at}</strong></span>
                    <span className="text-slate-300">BT: <strong className="text-white">{p.bt}</strong></span>
                  </div>
                  <button
                    onClick={() => deleteProcess(p.id)}
                    className="text-rose-400 hover:text-rose-200 p-3 rounded-lg transition"
                  >
                    <Trash2 size={22} />
                  </button>
                </motion.div>
              ))
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={calculateFCFS}
              disabled={processes.length === 0}
              className="flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-5 rounded-2xl font-bold text-xl shadow-[0_30px_60px_rgba(99,102,241,0.35)] hover:shadow-[0_35px_70px_rgba(236,72,153,0.35)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              <Play size={28} />
              Visualize FCFS
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetAll}
              className="flex-1 bg-slate-800 text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:bg-slate-700 flex items-center justify-center gap-3"
            >
              <RotateCcw size={28} />
              Reset All
            </motion.button>
          </div>
        </motion.div>

        {/* Results */}
        {result && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
            {/* Gantt Chart */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl shadow-[0_35px_65px_rgba(2,6,23,0.65)] p-10">
              <h3 className="text-4xl font-bold text-center mb-10 text-white">Gantt Chart</h3>
              <div className="flex items-end gap-3 overflow-x-auto pb-8">
                {result.gantt.map((block, i) => (
                  <div key={i} className="flex flex-col items-center min-w-32">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-white font-bold text-xl px-6 py-4 rounded-t-2xl shadow-2xl w-full text-center"
                      style={{
                        backgroundColor: `hsl(${i * 60}, 70%, 50%)`,
                        height: `${(block.end - block.start) * 35}px`,
                      }}
                    >
                      P{getProcessId(block.pid)}
                    </motion.div>
                    <div className="bg-slate-800 text-sm px-4 py-2 rounded-b-2xl w-full text-center font-mono text-slate-300">
                      {block.start} → {block.end}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Table + Averages */}
            <div className="grid md:grid-cols-2 gap-10">
              {/* Process Table */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl shadow-[0_35px_65px_rgba(2,6,23,0.65)] p-8">
                <h3 className="text-3xl font-bold text-center mb-6 text-white">Process Details</h3>
                <table className="w-full border-collapse text-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                      <th className="px-6 py-4">P</th>
                      <th className="px-6 py-4">AT</th>
                      <th className="px-6 py-4">BT</th>
                      <th className="px-6 py-4">CT</th>
                      <th className="px-6 py-4">TAT</th>
                      <th className="px-6 py-4">WT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {processes.map((p, i) => (
                      <tr key={i} className="text-center text-slate-200 hover:bg-slate-900 transition">
                        <td className="border border-slate-800 py-4 font-bold text-cyan-300">P{p.id}</td>
                        <td className="border border-slate-800 py-4">{p.at}</td>
                        <td className="border border-slate-800 py-4">{p.bt}</td>
                        <td className="border border-slate-800 py-4 font-semibold text-white">{result.ct[i]}</td>
                        <td className="border border-slate-800 py-4">{result.tat[i]}</td>
                        <td className="border border-slate-800 py-4 text-amber-300 font-bold">{result.wt[i]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Averages */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl p-12 shadow-[0_35px_65px_rgba(67,56,202,0.55)] flex flex-col justify-center items-center"
              >
                <h3 className="text-4xl font-bold mb-10">Average Values</h3>
                <div className="space-y-8 text-center">
                  <div>
                    <p className="text-2xl opacity-90">Average Turnaround Time</p>
                    <p className="text-6xl font-black">{(result.totalTat / processes.length).toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-2xl opacity-90">Average Waiting Time</p>
                    <p className="text-6xl font-black text-yellow-200">{(result.totalWt / processes.length).toFixed(2)}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}