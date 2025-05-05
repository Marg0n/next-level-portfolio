

import { Github, Linkedin, Twitter } from 'lucide-react';
import './Footer.css'

export function Footer() {
  return (
    <footer className="relative bg-black text-white py-12">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      {/* Animated Stars */}
      <div className="absolute inset-0 bg-stars bg-cover bg-fixed opacity-40"></div>
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
            <p className="mt-2 text-lg">Follow me on social media or get in touch!</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="h-8 w-8 text-white hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-8 w-8 text-white hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-8 w-8 text-white hover:text-gray-400 transition-colors" />
            </a>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}