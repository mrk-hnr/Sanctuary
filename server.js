import { createServer, Model } from "miragejs"


createServer({
    models: {
        cats: Model,
    },

    seeds(server) {
        server.create("cat", { id: "1", breed: "British Shorthair", age: 2, description: "The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, thick coat, and broad face. The most familiar colour variant is the British Blue, with a solid grey-blue coat, pineapple eyes, and a medium-sized tail.", imageUrl: "https://images.pexels.com/photos/1521304/pexels-photo-1521304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", gender: "male", hostId: "123" })
        server.create("cat", { id: "2", breed: "Persian", age: 2, description: "The Persian cat, also known as the Persian Longhair, is a long-haired breed of cat characterised by a round face and short muzzle. The first documented ancestors of Persian cats might have been imported into Italy from Khorasan as early as around 1620, however, this has not been proven.", imageUrl: "https://images.pexels.com/photos/5610527/pexels-photo-5610527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", gender: "female", hostId: "123" })
        server.create("cat", { id: "3", breed: "Orange", age: 1, description: "The norm is that the majority of orange cats are chaotic and share one collective brain cell, which also keeps escaping from the loose confines of their fluffy minds. With millions of orange cats walking around the Earth and only one brain cell for all of them to function, most of these felines end up acting like doofuses", imageUrl: "https://i.redd.it/sjusjrmpazh81.jpg", gender: "yes", hostId: "456" })
        server.create("cat", { id: "4", breed: "American Shorthair", age: 1, description: "The American Shorthair is a breed of domestic cat believed to be descended from European cats brought to North America by early settlers to protect valuable cargo from mice and rats. According to the Cat Fanciers' Association, it was the eighth most popular pedigreed cat in the world for 2020.", imageUrl: "https://images.pexels.com/photos/16978948/pexels-photo-16978948/free-photo-of-a-kitten-sitting-on-a-windowsill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", gender: "female", hostId: "789" })
        server.create("cat", { id: "5", breed: "Maine Coon", age: 1, description: "hTe Maine Coon is a large domesticated cat breed. It is one of the oldest natural breeds in North America. The breed originated in the U.S. state of Maine, where it is the official state cat.", imageUrl: "https://images.pexels.com/photos/14639089/pexels-photo-14639089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", gender: "female", hostId: "789" })
        server.create("cat", { id: "6", breed: "Siamese", age: 2, description: "The Siamese cat is one of the first distinctly recognised breeds of Asian cat. Derived from the Wichianmat landrace, one of several varieties of cats native to Thailand, the original Siamese became one of the most popular breeds in Europe and North America in the 19th century.", imageUrl: "https://images.pexels.com/photos/13683407/pexels-photo-13683407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", gender: "female", hostId: "123" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        // this.timing = 1000

        this.get("/cats", (schema, request) => {
            return new Response(400, {}, {error: "Error fetching data"})
            // return schema.cats.all()
        })
        
        this.get("/cats/:id", (schema, request) => {
            const id = request.params.id
            return schema.cats.find(id)
        })

        this.get("/dash/cats", (schema, request) => {
            // Hard-coded hostID for now
            return schema.cats.where({ hostId: "123"})
        })

        this.get("/dash/cats/:id", (schema, request) => {
            // Hard-coded hostID for now
            const id = request.params.id
            // return schema.cats.where({id, hostId: "123"})
            return schema.cats.findBy({id, hostId: "123"})
        })
    }
})