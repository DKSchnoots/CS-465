/* Get Homepage */
const index = (req, res) => {
    res.render('index', { title: "Travrl Getaways"});
};

module.exports = {
    index
}