import { Mail, MessageCircle, Phone } from "lucide-react";
import { Card } from "../components/ui/card";

function Projects() {
  return (
    <div>
      <div className="h-[100vh] border-2 border-indigo-600">
        <p className="text-6xl text-pink-700 m-20">Projects</p>
        <p className="text-3xl m-20">Google Business Profile</p>
        <p className="text-2xl mt-20 ml-20 mb-10">
          With a Business Profile on Google, you can manage how your local
          business shows up across Google products, like Maps and Search. If you
          run a business that serves customers at a particular location, or you
          serve customers within a designated service area, your Business
          Profile can help people find you. Verified businesses on Google are
          twice as likely to be considered reputable.
        </p>
        <div className="grid lg:grid-cols-3 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-3 border-2 border-indigo-600">
          <div>
            <p className="flex justify-center text-4xl m-2">Email Support</p>
            <Card className="border-2 border-red-600 w-[25vw] h-[25vh] ml-16 flex flex-col items-center justify-center text-center p-4">
              <Mail className="w-[7vw] h-[7vh]" />
              <p className="text-xl">
                I have provided the support to the Customers via Email. Customer
                will contact through Email i need to do all the internal checks
                if the business is eligible I used to verify the business.
              </p>
            </Card>
          </div>
          <div>
            <p className="flex justify-center text-4xl m-2">Phone Support</p>
            <Card className="border-2 border-red-600 w-[25vw] h-[25vh] ml-16  flex items-center justify-center">
              <Phone className="w-[7vw] h-[7vh]" />
              <p className="text-xl">
                I have provided the support to the Customers via Phone. Once the
                internal checks are done I will make a call to the Customer
                based on the existence and affilication I used to verify the
                business.
              </p>
            </Card>
          </div>
          <div>
            <p className="flex justify-center text-4xl m-2">Chat Support</p>
            <Card className="border-2 border-red-600 w-[25vw] h-[25vh] ml-16  flex items-center justify-center">
              <MessageCircle className="w-[7vw] h-[7vh]"/>
              <p>
                When Ever customer will raise the request via chat. Immediately
                i pick the chat and make a video call to the customer. Over the
                video call used to take all the required information and verify
                the profile. business.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
