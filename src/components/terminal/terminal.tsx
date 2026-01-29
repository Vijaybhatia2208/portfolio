// components/terminal.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Terminal as TerminalIcon, X, Minimize, Maximize, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CommandOutput {
  id: number;
  command: string;
  output: React.ReactNode;
}

const Terminal: React.FC = () => {
  const [commands, setCommands] = useState<CommandOutput[]>([]);
  const [input, setInput] = useState<string>("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isMaximized, setIsMaximized] = useState(true);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [commands]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCommand = (cmd: string): React.ReactNode => {
    const lowerCmd = cmd.toLowerCase().trim();
    switch (lowerCmd) {
      case "help":
        return (
          <div className="text-sm">
            <p>Available commands:</p>
            <p>- <span className="text-cyan-400">help</span>: Show this help message</p>
            <p>- <span className="text-cyan-400">clear</span>: Clear the terminal</p>
            <p>- <span className="text-cyan-400">echo &lt;message&gt;</span>: Print a message</p>
            <p>- <span className="text-cyan-400">date</span>: Show current date and time</p>
            <p>- <span className="text-cyan-400">whoami</span>: Display current user</p>
            <p>- <span className="text-cyan-400">about</span>: Learn about this me</p>
            <p>- <span className="text-cyan-400">socials</span>: View social links</p>
            <p>- <span className="text-cyan-400">minimize</span>: Minimize the terminal</p>
            <p>- <span className="text-cyan-400">close</span>: Close the terminal</p>
          </div>
        );
      case "clear":
        setCommands([]);
        return null;
      case "date":
        return new Date().toLocaleString();
      case "whoami":
        return "guest@next-terminal";
      case "minimize":
        setIsMaximized(false);
        return "Terminal minimized. Click the maximize button to restore.";
      case "close":
        window.close();
        return ""
      case "socials":
        return (
           <div className="text-sm">
            <p>Connect with me:</p>
            <p>- <a href="https://github.com/Vijaybhatia2208" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub</a></p>
            <p>- <a href="https://www.linkedin.com/in/vijay-bhatia-031950216/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">LinkedIn</a></p>
            <p>- <a href="https://x.com/VijayBh1196378" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">X (Twitter)</a></p>
          </div>
        )
      case "about":
        return (
          <div>
            <p>
              Hey there! Thanks for your interest in getting to know me better.<br />
              I am <span className="text-green-400 font-semibold">Vijay Bhatia</span>, 22, currently a <span className="text-green-400">Backend Engineer</span> at <span className="text-green-400">Recurrent Software</span>.
            </p>
            <p className="mt-2">
              I am a huge <span className="text-green-400">Linux enthusiast</span> and absolutely love working in the terminal. My setup is minimalist – just my terminal, IDE, and browser!
            </p>  
            <p className="mt-2">
              I am passionate about <span className="text-green-400">building things</span> and always eager to learn. When I am not coding, you’ll probably find me jamming to Bollywood tunes. Indian music for the win! 🎶
            </p>
            <p className="mt-2">
               Type <span className="text-cyan-400">socials</span> to connect with me!
            </p>
          </div>
        );
      default: if (lowerCmd.startsWith("echo ")) {
          return cmd.substring(5);
        }
        return (
          <span className="text-red-400">
            Command not found: <span className="text-white">{cmd}</span>. Type{" "}
            <span className="text-cyan-400">help</span> for a list of commands.
          </span>
        );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newOutput: CommandOutput = {
      id: commands.length + 1,
      command: input,
      output: handleCommand(input),
    };

    setCommands((prev) => [...prev, newOutput]);
    setInput("");
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div
      className={`bg-gray-900 text-gray-100 font-mono rounded-lg shadow-lg overflow-hidden border border-gray-700
        ${isMaximized ? "fixed inset-0 z-50 rounded-none" : "w-full max-w-3xl h-[500px]"}
        flex flex-col`}
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between bg-gray-800 p-2 text-sm text-gray-400 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <TerminalIcon size={16} className="text-cyan-400" />
          <span>next-terminal - bash</span>
        </div>
        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-gray-400 hover:bg-gray-700 hover:text-white"
            onClick={toggleMaximize}
          >
            {isMaximized ? <Minimize size={16} className="rotate-90" /> : <Maximize size={16} />}
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-red-400 hover:bg-red-700 hover:text-white">
            <X size={16} />
          </Button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <ScrollArea className="flex-grow p-4 text-sm" ref={scrollAreaRef}>
        {commands.map((cmd) => (
          <div key={cmd.id} className="mb-2">
            <div className="flex">
              <span className="text-green-400">guest@next-terminal:~$</span>{" "}
              <span className="ml-1 text-white">{cmd.command}</span>
            </div>
            {cmd.output && <div className="ml-4 text-gray-300">{cmd.output}</div>}
          </div>
        ))}
      </ScrollArea>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 bg-gray-800">
        <div className="flex items-center">
          <span className="text-green-400 text-sm">guest@next-terminal:~$</span>
          <Input
            ref={inputRef}
            type="text"
            value={input}
            placeholder="Type a command... Ex. help"
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow ml-2 bg-transparent  border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white outline-none p-0 h-auto"
            autoFocus
            spellCheck="false"
            autoCapitalize="off"
            autoCorrect="off"
          />
        </div>
      </form>
      
      {/* Footer Socials */}
      <div className="bg-gray-800 p-2 border-t border-gray-700 flex justify-end space-x-4 pr-4">
          <a href="https://github.com/Vijaybhatia2208" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/vijay-bhatia-031950216/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/VijayBh1196378" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
      </div>
    </div>
  );
};

export default Terminal;