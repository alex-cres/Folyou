function router(app, express) {
    const servicer = require("../services/servicer.js");


app.get("/getUserById", (req, res,next) => {  servicer.getUserById(req,res,next)});

app.get("/getUserLogin", (req, res,next) => {  servicer.getUserLogin(req,res,next)});
app.get("/getUserBySession", (req, res,next) => {  servicer.getUserBySession(req,res,next)});

app.get("/getUsers", (req, res,next) => {  servicer.getUsers(req,res,next)});

app.put("/putClicks", (req, res,next) => {  servicer.putClicks(req,res,next)});

app.get("/getPortfolioById", (req, res,next) => {  servicer.getPortfolioById(req,res,next)});
app.get("/getPortfolioByIdRecent", (req, res,next) => {  servicer.getPortfolioByIdRecent(req,res,next)});
app.get("/getPortfolioByIdUser", (req, res,next) => {  servicer.getPortfolioByIdUser(req,res,next)});
app.get("/getTrendingPortfolio", (req, res,next) => {  servicer.getTrendingPortfolio(req,res,next)});

app.get("/getTrendingProposal", (req, res,next) => {  servicer.getTrendingProposal(req,res,next)});
app.get("/getProposalByIdRecent", (req, res,next) => {  servicer.getProposalByIdRecent(req,res,next)});
app.get("/getProposalByIdUser", (req, res,next) => {  servicer.getProposalByIdUser(req,res,next)});
app.get("/getProposalByIdProposal", (req, res,next) => {  servicer.getProposalByIdProposal(req,res,next)});

app.get("/getTalentByIdRecent", (req, res,next) => {  servicer.getTalentByIdRecent(req,res,next)});
app.get("/getTalentByIdUser", (req, res,next) => {  servicer.getTalentByIdUser(req,res,next)});

app.get("/getKeywords", (req, res,next) => {  servicer.getKeywords(req,res,next)});




}
module.exports.router = router;