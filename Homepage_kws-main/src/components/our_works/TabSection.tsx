
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Square } from "lucide-react";

const TabSection = () => {
  return (
    <section className="flex flex-col items-center gap-16 px-[70px] py-[100px] max-md:px-10 max-sm:px-5">
      <div className="flex flex-col items-center gap-[17px] max-w-[783px] text-center">
        <h2 className="text-[#F9F9F9] text-[38px] font-bold max-sm:text-[32px]">
          our services
        </h2>
        <p className="text-[#969696] text-[22px] max-sm:text-lg">
          Explore our range of specialized services designed to meet your needs and exceed your expectations.
        </p>
      </div>
      
      <div className="w-full max-w-4xl">
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#0B174B] border border-[#913BFF]/30">
            <TabsTrigger value="tab1" className="text-white data-[state=active]:bg-[#913BFF] data-[state=active]:text-white">
              Web Development
            </TabsTrigger>
            <TabsTrigger value="tab2" className="text-white data-[state=active]:bg-[#913BFF] data-[state=active]:text-white">
              Mobile Solutions
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="tab1" className="mt-8">
            <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
              <Card className="bg-[linear-gradient(4deg,#050D36_2.73%,rgba(145,59,255,0.17)_97.27%)] border-[0.5px] border-white text-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Square className="h-6 w-6 text-[#913BFF]" />
                    <CardTitle className="text-xl">Frontend Development</CardTitle>
                  </div>
                  <CardDescription className="text-[#C2C2C2]">
                    Modern, responsive interfaces built with React
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#C2C2C2]">
                    We create beautiful, performant, and accessible web applications using the latest technologies and frameworks. Our designs are responsive, intuitive, and tailored to your brand.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-[linear-gradient(4deg,#050D36_2.73%,rgba(145,59,255,0.17)_97.27%)] border-[0.5px] border-white text-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Square className="h-6 w-6 text-[#913BFF]" />
                    <CardTitle className="text-xl">Backend Systems</CardTitle>
                  </div>
                  <CardDescription className="text-[#C2C2C2]">
                    Scalable server architecture and APIs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#C2C2C2]">
                    We build robust backend systems that power your applications with secure, scalable, and efficient infrastructures. Our solutions include RESTful APIs, database design, and cloud services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="tab2" className="mt-8">
            <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
              <Card className="bg-[linear-gradient(4deg,#050D36_2.73%,rgba(145,59,255,0.17)_97.27%)] border-[0.5px] border-white text-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Square className="h-6 w-6 text-[#913BFF]" />
                    <CardTitle className="text-xl">iOS Development</CardTitle>
                  </div>
                  <CardDescription className="text-[#C2C2C2]">
                    Native and cross-platform iOS applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#C2C2C2]">
                    Our iOS development team creates polished, high-performance applications for Apple devices. We focus on intuitive user experiences and leveraging platform-specific features.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-[linear-gradient(4deg,#050D36_2.73%,rgba(145,59,255,0.17)_97.27%)] border-[0.5px] border-white text-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Square className="h-6 w-6 text-[#913BFF]" />
                    <CardTitle className="text-xl">Android Solutions</CardTitle>
                  </div>
                  <CardDescription className="text-[#C2C2C2]">
                    Custom Android apps for diverse devices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#C2C2C2]">
                    We develop feature-rich Android applications that work seamlessly across the diverse ecosystem of Android devices. Our team ensures optimal performance and reliability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TabSection;
