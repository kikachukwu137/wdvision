const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                WDVision Tech
              </h3>
              <p className="text-muted-foreground">
                Empowering businesses through technology, education, and faith-based service.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("about");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("services");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("impact");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    Our Impact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>info@wdvisiontech.com</li>
                <li>+234 (XXX) XXX-XXXX</li>
                <li>Nigeria</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} WDVision Tech. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with excellence, integrity, and innovation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
