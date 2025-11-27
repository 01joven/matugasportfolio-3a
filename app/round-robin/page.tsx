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
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-900">
          First Come First Served (FCFS)
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="border border-gray-100 rounded-2xl p-6 mb-8 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Add Processes</h2>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="number"
              placeholder="Arrival Time (AT)"
              value={atInput}
              onChange={(e) => setAtInput(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg focus:border-slate-300 focus:outline-none text-base"
              min="0"
            />
            <input
              type="number"
              placeholder="Burst Time (BT)"
              value={btInput}
              onChange={(e) => setBtInput(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400 rounded-lg focus:border-slate-300 focus:outline-none text-base"
              min="1"
            />
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={addProcess} className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold">
              <Plus size={18} />
              <span className="ml-2">Add</span>
            </motion.button>
          </div>

          <div className="space-y-3 mb-6">
            {processes.length === 0 ? (
              <p className="text-center text-slate-500 py-6">No processes added yet. Add one above!</p>
            ) : (
              processes.map((p) => (
                <motion.div key={p.id} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center justify-between border border-gray-100 rounded-lg p-4">
                  <div className="flex items-center gap-6 font-medium text-slate-800">
                    <span className="text-base text-slate-700">P{p.id}</span>
                    <span className="text-slate-600">AT: <strong className="text-slate-900">{p.at}</strong></span>
                    <span className="text-slate-600">BT: <strong className="text-slate-900">{p.bt}</strong></span>
                  </div>
                  <button onClick={() => deleteProcess(p.id)} aria-label={`Delete process ${p.id}`} className="text-rose-500 hover:text-rose-600 p-2 rounded">
                    <Trash2 size={18} />
                  </button>
                </motion.div>
              ))
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={calculateFCFS} disabled={processes.length === 0} className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
              <Play size={18} />
              <span className="ml-2">Visualize FCFS</span>
            </motion.button>

            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={resetAll} className="flex-1 border border-gray-200 py-3 rounded-lg font-semibold text-slate-700">
              <RotateCcw size={18} />
              <span className="ml-2">Reset</span>
            </motion.button>
          </div>
        </motion.div>

        {result && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-center mb-6 text-slate-900">Gantt Chart</h3>
              <div className="flex items-end gap-3 overflow-x-auto pb-4">
                {result.gantt.map((block, i) => (
                  <div key={i} className="flex flex-col items-center min-w-20">
                    <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: i * 0.05 }} className="text-white font-bold text-base px-4 py-2 rounded-t-md w-full text-center" style={{
                      backgroundColor: `hsl(${i * 60}, 70%, 50%)`,
                      height: `${(block.end - block.start) * 24}px`,
                    }}>
                      P{getProcessId(block.pid)}
                    </motion.div>
                    <div className="bg-gray-50 text-sm px-3 py-2 rounded-b-md w-full text-center font-mono text-slate-600">{block.start} → {block.end}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-100 rounded-2xl p-4 bg-white">
                <h3 className="text-lg font-semibold text-center mb-4 text-slate-900">Process Details</h3>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100 text-slate-700">
                      <th className="px-3 py-2">P</th>
                      <th className="px-3 py-2">AT</th>
                      <th className="px-3 py-2">BT</th>
                      <th className="px-3 py-2">CT</th>
                      <th className="px-3 py-2">TAT</th>
                      <th className="px-3 py-2">WT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {processes.map((p, i) => (
                      <tr key={i} className="text-center text-slate-700">
                        <td className="border px-3 py-2 font-semibold">P{p.id}</td>
                        <td className="border px-3 py-2">{p.at}</td>
                        <td className="border px-3 py-2">{p.bt}</td>
                        <td className="border px-3 py-2 font-semibold">{result.ct[i]}</td>
                        <td className="border px-3 py-2">{result.tat[i]}</td>
                        <td className="border px-3 py-2 font-semibold">{result.wt[i]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <motion.div initial={{ scale: 0.98 }} animate={{ scale: 1 }} className="border border-gray-100 rounded-2xl p-6 bg-white flex flex-col justify-center items-center">
                <h3 className="text-lg font-semibold mb-4">Average Values</h3>
                <div className="space-y-4 text-center">
                  <div>
                    <p className="text-sm text-slate-600">Average Turnaround Time</p>
                    <p className="text-2xl font-bold">{(result.totalTat / processes.length).toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Average Waiting Time</p>
                    <p className="text-2xl font-bold">{(result.totalWt / processes.length).toFixed(2)}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}