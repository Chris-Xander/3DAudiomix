import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import servicesHero from '@/assets/startup-team-cheering-after-seeing-company-stocks-raising-doing-high-five.jpg';
import imgMixer from '@/assets/digital-mixer-recording-studio-work-with-sound-concept-creativity-show-business.jpg';
import imgInstruments from '@/assets/pexels-oandremoura-2897776.jpg';
import imgSoundEngineering from '@/assets/side-view-musician-working-studio.jpg';
import emailjs from '@emailjs/browser';
import { Bluetooth } from 'lucide-react';

export default function Services() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    service: '',
    additionalinfo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    //EmailJS Implementation
    try {
      const result = await emailjs.send(
        'service_x2ebsqo', 
        'template_cgr8qoe',
        {
          name: formData.name,
          contact: formData.contact,
          email: formData.email,
          service: formData.service,
          additionalinfo: formData.additionalinfo,
        },
        'TmrOC-PVf424vJzvG'
      );
      toast({
      title: "Request Received!",
      description: "Thank you for contacting 3D Audiomix. We will contact you shortly!",
    });
    setFormData({ name: '', contact: '', email: '', service: '', additionalinfo: '' });
  } catch (error) {
    toast({
      title: "Failed to Submit",
      description: "There was a problem processing your request...Please try again in a few minutes"
    });
  }
    };

    
  const services = [
    {
      title: 'Equipment Rental',
      description: 'We provide rentals for high-quality audio equipment (Linaries, Digital Mixers, Monitors, etc), for events, studios, and more.',
      image: imgMixer,
    },
    {
      title: 'Sound Engineering',
      description: 'Professional sound engineering for live events and recordings.',
      image: imgSoundEngineering,
    },
    {
      title: 'Instrument Sales',
      description: 'Top-tier instruments and related accessories for programs and events of all levels to ensure the best audio experience!',
      image: imgInstruments,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="image-container w-full h-full min-h-0">
            <img src={servicesHero} alt="Services hero" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our wide range of professional audio services, including equipment rentals, 
            sound engineering, and instrument sales.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-card p-8 hover-lift"
              >
                {service.image && (
                  <img src={service.image} alt={service.title} className="w-full h-40 object-cover mb-4 rounded" />
                )}
                <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Our Services in Detail</h2>
          
          {/* Equipment Rental */}
          <div className="mb-16 mx-auto max-w-3xl">
            <h3 className="text-3xl font-bold mb-6 text-primary text-center">Equipment Rental Services</h3>
            <div className="space-y-4 text-muted-foreground text-left">
              <p className="text-center text-lg">Our equipment rental service provides top-of-the-line audio gear for any event or production need:</p>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li><span className="font-semibold">Sound Systems:</span> Line arrays, subwoofers, and powered speakers from industry-leading brands</li>
                <li><span className="font-semibold">Mixing Consoles:</span> Digital and analog mixing boards for venues of all sizes</li>
                <li><span className="font-semibold">Microphones:</span> Wide selection of dynamic, condenser, and wireless microphones</li>
                <li><span className="font-semibold">Monitoring Systems:</span> In-ear and stage monitoring solutions</li>
                <li><span className="font-semibold">Processing Equipment:</span> Effects processors, equalizers, and compressors</li>
              </ul>
            </div>
          </div>

          {/* Sound Engineering */}
          <div className="mb-16 mx-auto max-w-3xl">
            <h3 className="text-3xl font-bold mb-6 text-primary text-center">Sound Engineering Services</h3>
            <div className="space-y-4 text-muted-foreground text-left">
              <p className="text-center text-lg">Our professional sound engineering services cover all aspects of audio production:</p>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li><span className="font-semibold">Live Event Sound:</span> Full sound management for concerts, festivals, and corporate events</li>
                <li><span className="font-semibold">Audio Mixing:</span> Expert mixing and mastering for optimal sound quality</li>
                <li><span className="font-semibold">Sound Design:</span> Custom sound design for theater, film, and multimedia projects</li>
                <li><span className="font-semibold">Technical Consultation:</span> Expert advice on audio setup and system design</li>
              </ul>
            </div>
          </div>

          {/* Instrument Sales */}
          <div className="mb-16 mx-auto max-w-3xl">
            <h3 className="text-3xl font-bold mb-6 text-primary text-center">Instrument Sales</h3>
            <div className="space-y-4 text-muted-foreground text-left">
              <p className="text-center text-lg">We offer a carefully curated selection of musical instruments and accessories:</p>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li><span className="font-semibold">Musical Instruments:</span> Wide range of string, wind, and percussion instruments</li>
                <li><span className="font-semibold">Electronic Instruments:</span> Synthesizers, digital pianos, and MIDI controllers</li>
                <li><span className="font-semibold">Accessories:</span> Cables, stands, cases, and other essential equipment</li>
                <li><span className="font-semibold">Maintenance Supplies:</span> Cleaning kits, strings, reeds, and maintenance tools</li>
                <li><span className="font-semibold">Custom Orders:</span> Special order service for specific instrument requirements</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-8">
              Our services come with expert support and guidance to ensure you get the best possible audio experience. Terms and conditions apply.
            </p>
          </div>
        </div>
      </section>

  {/* Booking Form Section */}
  <section
    className="py-20"
    style={{
      backgroundImage: `linear-gradient(90deg, #04121eff 0%, #082437ff 30%, #082a3eff 60%, #092542ff 100%)`,
      backgroundSize: 'cover',
    }}
  >
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-2 text-center gradient-text">
              Book a Service
            </h2>
            <h2 className='service-booking-manual-text text-center'>
              Provide your details in the section below!. Specific info pertaining to the required services may be specified in the additional info field.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name/Organization"
                  required
                  className="bg-input border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact Number</Label>
                <Input
                  id="contact"
                  name="contact"
                  type="tel"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="bg-input border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your valid email"
                  required
                  className="bg-input border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Select Service</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Choose a service</option>
                  <option value="equipment-rental">Equipment Rental</option>
                  <option value="sound-engineering">Sound Engineering</option>
                  <option value="instrument-sales">Instrument Sales</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalinfo">Additional Information</Label>
                <Textarea
                  id="additionalinfo"
                  name="additionalinfo"
                  value={formData.additionalinfo}
                  onChange={handleChange}
                  placeholder="Tell us more about your requirements"
                  rows={4}
                  className="bg-input border-border"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit Request
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
