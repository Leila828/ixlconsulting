import { Link } from "wouter";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-4 gap-8 mb-8">
                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about"><a className="hover:text-white transition">About Us</a></Link></li>
                            <li><Link href="/services"><a className="hover:text-white transition">Services</a></Link></li>
                            <li><Link href="/projects"><a className="hover:text-white transition">Projects</a></Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition">Startup Advisory</a></li>
                            {/* Workshops removed as per request */}
                            <li><Link href="/coming-soon"><a className="hover:text-white transition">AI Solutions</a></Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><Link href="/coming-soon"><a className="hover:text-white transition">Blog</a></Link></li>
                            {/* Case Studies removed as per request */}
                            <li><Link href="/events"><a className="hover:text-white transition">Events</a></Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Contact</h4>
                        <p className="mb-2">Email: Salim@ixlconsulting.tech</p>
                        <p className="text-sm text-gray-400">Ready to discuss your next project?</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 text-center text-sm">
                    <p>&copy; 2025 iXL Consulting. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
