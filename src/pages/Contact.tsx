import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left side - Contact Info */}
            <div>
              <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                HOW CAN WE HELP YOU OUT?
              </h2>
              
              <div className="space-y-8 mb-8">
                <div>
                  <p className="text-foreground mb-3">
                    To build a HR Tech / Work Tech business with us, connect with
                  </p>
                  <a 
                    href="mailto:abhi@lokaviveka.com" 
                    className="inline-flex items-center gap-2 text-primary hover:underline text-lg font-medium"
                  >
                    <Mail className="w-5 h-5" />
                    abhi@lokaviveka.com
                  </a>
                </div>
                
                <div>
                  <p className="text-foreground mb-3">
                    To understand how we can deploy HR Tech / Work Tech solutions in your business, connect with
                  </p>
                  <a 
                    href="mailto:sakshi@lokaviveka.com" 
                    className="inline-flex items-center gap-2 text-primary hover:underline text-lg font-medium"
                  >
                    <Mail className="w-5 h-5" />
                    sakshi@lokaviveka.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="bg-secondary/30 rounded-lg p-8">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                CONTACT US
              </h3>
              <h4 className="text-2xl font-bold mb-6">
                Leave us a little info, and we'll be in touch.
              </h4>
              
              <form className="space-y-4">
                <Input 
                  placeholder="Name*" 
                  required
                  className="bg-background"
                />
                <Input 
                  type="email" 
                  placeholder="Email*" 
                  required
                  className="bg-background"
                />
                <Input 
                  type="tel" 
                  placeholder="Mobile*" 
                  required
                  className="bg-background"
                />
                <Textarea 
                  placeholder="Brief Project Details" 
                  rows={6}
                  className="bg-background resize-none"
                />
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                >
                  Send a message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
            Loka Viveka (c/o OMAM Consultants) operates from Mumbai, Delhi, Kolkata, Chennai, Hyderabad, Bangalore, and Pune. Our Head Office coordinates are:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Mumbai <span className="text-sm font-normal text-muted-foreground">(Corporate Office)</span></h3>
              <p className="text-muted-foreground mb-4">
                G 231, Kanakia Zillion,<br />
                BKC Annexe,<br />
                LBS Marg, Kurla (W),<br />
                Mumbai – 400 070.
              </p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://maps.app.goo.gl/UvmbySE49gxSxYvw9" target="_blank" rel="noopener noreferrer">
                  Get Direction
                </a>
              </Button>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">New Delhi</h3>
              <p className="text-muted-foreground mb-4">
                Unit No – 3, 3rd Floor,<br />
                Block – A, MG Centrum,<br />
                M.G. Road. Sultanpur.<br />
                New Delhi – 110 030.
              </p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://maps.app.goo.gl/44jLQSVriCWy6qEXA" target="_blank" rel="noopener noreferrer">
                  Get Direction
                </a>
              </Button>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Kolkata</h3>
              <p className="text-muted-foreground mb-4">
                4th Floor, SDF Building,<br />
                Saltlake Electronic Complex,<br />
                Kolkata – 700091,<br />
                West Bengal, India.
              </p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://maps.app.goo.gl/evvyRd1uUoUTxw1UA" target="_blank" rel="noopener noreferrer">
                  Get Direction
                </a>
              </Button>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Chennai</h3>
              <p className="text-muted-foreground mb-4">
                Workafella High Street,<br />
                316-III Floor, 431 Anna Salai,<br />
                Theynampet, Chennai – 600018,<br />
                Tamil Nadu, India.
              </p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://maps.app.goo.gl/hexRSp3q6vvJuf2C6" target="_blank" rel="noopener noreferrer">
                  Get Direction
                </a>
              </Button>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Hyderabad</h3>
              <p className="text-muted-foreground mb-4">
                Workafella 6-3-252/2,<br />
                Sri Ram Nest, Mega City,<br />
                Irram Manzil Colony, Banjara Hills,<br />
                Hyderabad, Telangana 500082.
              </p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://maps.app.goo.gl/KPRNSokSTE2snYhu6" target="_blank" rel="noopener noreferrer">
                  Get Direction
                </a>
              </Button>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Bengaluru</h3>
              <p className="text-muted-foreground mb-4">
                454, VII Main Road,<br />
                Amarjyoti Layout,<br />
                Sanjaynagar,<br />
                Bangalore – 560094.
              </p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://maps.app.goo.gl/ueD3v9GmStFsAjJb7" target="_blank" rel="noopener noreferrer">
                  Get Direction
                </a>
              </Button>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Pune</h3>
              <p className="text-muted-foreground mb-4">
                404, Neel Siddhi Orchid,<br />
                Near Wadeshwar Fast Food,<br />
                Off Mumbai Bangalore Bypass,<br />
                Baner, Pune – 411045.
              </p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://maps.app.goo.gl/jkCvxzBKnGUo5y6T8" target="_blank" rel="noopener noreferrer">
                  Get Direction
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
