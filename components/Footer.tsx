import React from 'react';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg> },
  { name: 'Twitter', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.596-5.515 5.803 0 .454.052.895.149 1.322-4.575-.229-8.632-2.427-11.353-5.764-.474.814-.746 1.758-.746 2.766 0 1.99.969 3.755 2.44 4.796-.897-.028-1.745-.276-2.483-.692v.072c0 2.784 1.933 5.122 4.499 5.642-.47.127-.965.194-1.48.194-.36 0-.707-.036-1.045-.098.718 2.24 2.793 3.87 5.262 3.914-1.918 1.503-4.34 2.4-6.963 2.4-.45 0-.895-.026-1.334-.078 2.478 1.588 5.438 2.518 8.64 2.518 10.377 0 16.031-8.614 16.031-16.031 0-.245-.005-.488-.017-.73a11.455 11.455 0 002.822-2.923z"/></svg> },
  { name: 'Instagram', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.25-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg> },
  { name: 'LinkedIn', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg> },
];

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-brand-gray py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                        <div className="text-3xl font-bold font-gorditas tracking-wider mb-4">
                            <span className="bg-brand-lime text-black rounded-md px-2 mr-1">U</span>
                            Universal
                        </div>
                        <p className="text-brand-light-gray mb-6">Creative visual designer building beautiful, intuitive, and highly-crafted user experiences.</p>
                        <div className="flex space-x-4">
                            {socialLinks.map(link => (
                                <a key={link.name} href={link.href} className="text-white hover:text-brand-lime transition-colors duration-300">
                                    <span className="sr-only">{link.name}</span>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#home" className="text-brand-light-gray hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="text-brand-light-gray hover:text-white transition-colors">About</a></li>
                            <li><a href="#work" className="text-brand-light-gray hover:text-white transition-colors">Work</a></li>
                            <li><a href="#services" className="text-brand-light-gray hover:text-white transition-colors">Services</a></li>
                            <li><a href="#blog" className="text-brand-light-gray hover:text-white transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Contact</h4>
                        <address className="not-italic text-brand-light-gray space-y-3">
                            <p>158-2225 <br/>Tokyo shinjuku 2-15-7, 1-201</p>
                            <p><a href="mailto:universala2z@gmail.com" className="hover:text-white transition-colors">universala2z@gmail.com</a></p>
                            <p><a href="tel:+1234567890" className="hover:text-white transition-colors">+81 30 245 890</a></p>
                        </address>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
                        <p className="text-brand-light-gray mb-4">Subscribe to our newsletter to get the latest updates.</p>
                        <form>
                            <div className="flex">
                                <input type="email" placeholder="Your email" className="bg-brand-dark border border-gray-700 rounded-l-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-lime w-full" />
                                <button type="submit" className="bg-brand-lime text-black font-bold px-5 py-3 rounded-r-md hover:bg-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-gray-800 text-center text-brand-light-gray">
                    <p>&copy; {new Date().getFullYear()} Universal. All Rights Reserved. Designed by <span className="text-white">David Matias</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
