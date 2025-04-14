
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">About Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Legal Information</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">GDPR Compliance</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-brand-400" />
                <span>support@thvab.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-brand-400" />
                <span>+966 12 345 6789</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-brand-400" />
                <span>King Fahd Road, Riyadh, Saudi Arabia</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Thvab. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-center inline-block hover:text-white transition-colors">
              <span className="font-display font-bold text-xl text-white">Thvab</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
