import { Mail, MessageCircle, Phone } from "lucide-react";
import { Card } from "../components/ui/card";

function Projects() {
  return (
    <div className="min-h-screen p-8">
      <p className="text-6xl text-pink-700 mb-12 text-center">Projects</p>
      <p className="text-3xl mb-12 text-center">Amazon Clone</p>
      <div>
        <div className="bg-[url('https://wallpapers.com/images/featured/amazon-npcp6jc782ixp9zs.jpg')] bg-cover bg-center opacity-85 ml-20 mr-20 h-[300px] md:h-[400px] lg:h-[500px]">
      <div className="text-center px-4">
        <p className="text-2xl mb-10 flex justify-items-center max-w-3xl">The Amazon Clone project is a full-featured 
        e-commerce application built using HTML, CSS, JavaScript, Bootstrap, and React.js. It includes 
        user authentication, product listings, a shopping cart, and a streamlined checkout process, 
        demonstrating proficiency in responsive design and dynamic web development.</p>
      </div>
    </div>
    </div>
      <p className="text-3xl mb-12 text-center">Google Business Profile</p>
      <p className="text-2xl mb-20 text-center mx-auto max-w-3xl">
        With a Business Profile on Google, you can manage how your local
        business shows up across Google products, like Maps and Search. If you
        run a business that serves customers at a particular location, or you
        serve customers within a designated service area, your Business
        Profile can help people find you. Verified businesses on Google are
        twice as likely to be considered reputable.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        <div>
          <p className="text-4xl mb-4 text-center">Email Support</p>
          <Card className="border-2 border-red-600 flex flex-col items-center justify-center text-center p-6">
            <Mail className="w-16 h-16 mb-4" />
            <p className="text-xl">
              I have provided support to the Customers via Email. Customers
              contact through Email, and I perform all the internal checks to
              verify if the business is eligible.
            </p>
          </Card>
        </div>
        <div>
          <p className="text-4xl mb-4 text-center">Phone Support</p>
          <Card className="border-2 border-red-600 flex flex-col items-center justify-center text-center p-6">
            <Phone className="w-16 h-16 mb-4" />
            <p className="text-xl">
              I have provided support to the Customers via Phone. After
              completing internal checks, I call the Customer to verify the
              business based on existence and affiliation.
            </p>
          </Card>
        </div>
        <div>
          <p className="text-4xl mb-4 text-center">Chat Support</p>
          <Card className="border-2 border-red-600 flex flex-col items-center justify-center text-center p-6">
            <MessageCircle className="w-16 h-16 mb-4"/>
            <p className="text-xl">
              When customers raise a request via chat, I pick up the chat and make
              a video call to the customer. During the video call, I gather the
              required information and verify the business.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Projects;
