import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand Section */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                SkillShare
              </h1>
            </div>

            <p className="text-slate-500 max-w-xs mb-8">
              The world's leading platform for direct, expert-led tutorial
              learning and knowledge sharing.
            </p>

            
          </div>

          {/* Learn */}
          <div>
            <h6 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">
              Learn
            </h6>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Browse Tutorials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Learning Paths</a></li>
              
            </ul>
          </div>

          {/* Teach */}
          <div>
            <h6 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">
              Teach
            </h6>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Become an Instructor</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tutorial Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Creator Hub</a></li>
              
            </ul>
          </div>

          {/* Support */}
          <div>
            <h6 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">
              Support
            </h6>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>

              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © 2024 SkillShare Inc. Empowering direct learning.
          </p>

          <div className="flex gap-8 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">
              Sitemap
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;