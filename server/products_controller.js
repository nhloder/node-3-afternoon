module.exports = {
    getAll(req, res) {
        const db = req.app.get('db');
        db.read_products()
            .then(result => {
                res.status(200).send(result)
            }).catch(err => {
                res.status(500).send({ errorMessage: "we done goofed, try again later" })
                console.log(err)
            });
    },
    getOne(req, res) {
        const db = req.app.get('db');
        const { id } = req.params;
        db.read_product()
            .then(result => {
                res.status(200).send(result)
            }).catch(err => {
                res.status(500).send({ errorMessage: "we done goofed, try again later" })
                console.log(err)
            });
    },
    addProduct(req, res) {
        const db = req.app.get('db');
        const { name, description, price, image_url } = req.body;
        db.create_product({
            name: name,
            description: description,
            price: price,
            image_url: image_url
        })
            .then(result => {
                res.status(200).send(result)
            }).catch(err => {
                res.status(500).send({ errorMessage: "we done goofed, try again later" })
                console.log(err)
            });
    },
    update(req, res) {
        const db = req.app.get('db')
        const {params, query}= req.body
        db.update_product([query.description, params.id])
            .then(result => {
                res.status(200).send(result)
            }).catch(err => {
                res.status(500).send({ errorMessage: "we done goofed, try again later" })
                console.log(err)
            })
    },
    delete(req, res) {
        const db = req.app.get('db');

        db.delete_product(req.params.id)
            .then(result => {
                res.status(200).send(result)
            }).catch(err => {
                res.status(500).send({ errorMessage: "we done goofed, try again later" })
                console.log(err)
            });
    }
}