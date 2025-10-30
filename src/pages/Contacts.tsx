import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contacts() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      info: 'McCarthy Hill, Accra',
    },
    {
      icon: Phone,
      title: 'Telephone',
      info: '0244364884 / 0262364884',
    },
    {
      icon: Mail,
      title: 'Email',
      info: '3Daudiomix@gmail.com',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="img-placeholder w-full h-full min-h-0">
            {/* User will add contacts hero image here */}
          </div>
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold grad-text mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out to us through any of the following ways.
          </p>

          {/* Image Gallery */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <Card className="glass overflow-hidden lift">
              <div className="img-placeholder aspect-video">
                {/* User will add audio mixing console image here */}
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Professional audio mixing console in our state-of-the-art studio, 
                  equipped with the latest technology for crystal-clear sound production.
                </p>
              </div>
            </Card>

            <Card className="glass overflow-hidden lift">
              <div className="img-placeholder aspect-video">
                {/* User will add sound engineer image here */}
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Our experienced sound engineer meticulously crafting audio perfection, 
                  ensuring every event sounds exceptional.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="glass p-8 lift text-center group"
              >
                <contact.icon className="card-icon mx-auto mb-4 group-hover:animate-float" />
                <h2 className="text-2xl font-bold mb-3 text-primary">{contact.title}</h2>
                <p className="text-lg text-foreground">{contact.info}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 grad-text">
            Visit Our Studio
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Located in the heart of McCarthy Hill, our studio is equipped with cutting-edge 
            audio technology and staffed by experienced professionals ready to bring your 
            audio vision to life.
          </p>
          <p className="text-muted-foreground">
            Whether you need equipment rental, sound engineering services, or consultation, 
            we're here to help. Contact us today to discuss your project requirements.
          </p>
        </div>
      </section>
    </div>
  );
}
