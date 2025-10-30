import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

export default function Login() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // User can integrate Firebase or other auth later
      // For now, simulate login
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Login Successful",
        description: "Welcome back!",
      });
      
      navigate('/');
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="image-container w-full h-full min-h-0" style={{ minHeight: '100vh' }}>
          {/* User will add login background image here */}
        </div>
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <Card className="glass-card p-8 w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 gradient-text">
            Welcome Back
          </h2>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="bg-input border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="bg-input border-border"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm cursor-pointer">
                Remember me
              </Label>
            </div>
            <Link 
              to="/forgot-password" 
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          <Button 
            type="submit" 
            variant="hero" 
            size="lg" 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary hover:text-primary/80 transition-colors font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
