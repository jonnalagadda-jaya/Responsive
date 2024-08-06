import { Card } from "../components/ui/card"

const Home = () => {
  return (
    <div>
        <div className='h-[100vh] border-2 border-indigo-600'>
            <h3 className="text-2xl m-20">HELLO</h3>
            <h1 className="text-8xl m-20 text-emerald-600">I Am Jayasri Jonnalagadda</h1>
            <p className="text-4xl mt-20 ml-20 mr-[60rem]">Professional React Developer with a Focus on Crafting 
            Dynamic and Responsive User Interfaces.
            Expertise in Modern Front-End Technologies and Best Practices.</p>
        </div>
        <div className="h-[100vh] border-2 border-indigo-600">
        <h1 className="text-8xl ">About Me</h1>
        <div className="grid grid-cols-2 grid-rows-1 ">
        <p className="text-3xl border-2 border-indigo-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Sequi tenetur voluptas minus dolorem illum sapiente quisquam minima, dicta, nobis, dolor molestias. 
            In nulla at cumque mollitia recusandae maxime fugiat optio!</p>
            <p className="text-3xl border-2 border-indigo-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, animi sit? Accusamus, asperiores? 
                Laudantium quis nesciunt fugit veniam perferendis qui, 
                voluptatem repudiandae est id molestiae aut dignissimos beatae, a accusamus.</p>
                </div>
        </div>
        <div className='h-[100vh] border-2 border-indigo-600'>
            <h1>Experience</h1>
            <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nihil sunt deleniti iste corporis blanditiis, non laudantium esse quis tempora beatae! Repellat odit alias sint assumenda consequatur, maiores qui modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic atque earum quo reprehenderit voluptatum aperiam veritatis dolore quam eius exercitationem repudiandae modi mollitia nobis odio aspernatur, dolores molestiae dolorem sunt!</p>
        </div>
        <div className='h-[100vh] border-2 border-indigo-600'>
            <h1>Projects</h1>
            <div className="grid grid-cols-3 grid-rows-2 mt-20 h-[80vh] border-2 border-indigo-600">
                <Card className="border-2 border-red-600 w-[20vw] h-[20vh] mt-20 ml-32 flex items-center justify-center">
                 <p>Card Content</p>
            </Card>
            <Card className="border-2 border-red-600 w-[20vw] h-[20vh] mt-20 ml-28 flex items-center justify-center">
                 <p>Card Content</p>
            </Card>
            <Card className="border-2 border-red-600 w-[20vw] h-[20vh] mt-20 ml-28 flex items-center justify-center">
                 <p>Card Content</p>
            </Card>
            <Card className="border-2 border-red-600 w-[20vw] h-[20vh] mt-20 ml-32 flex items-center justify-center">
                 <p>Card Content</p>
            </Card>
            <Card className="border-2 border-red-600 w-[20vw] h-[20vh] mt-20 ml-28 flex items-center justify-center">
                 <p>Card Content</p>
            </Card>
            <Card className="border-2 border-red-600 w-[20vw] h-[20vh] mt-20 ml-28 flex items-center justify-center">
                 <p>Card Content</p>
            </Card>
    </div>
        </div>
        <div className='h-[100vh] border-2 border-indigo-600'>
            <h1>Contact</h1>
        </div>
    </div>
  )
}

export default Home