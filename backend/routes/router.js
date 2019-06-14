function router(app,express,uploadsheet,uploadproposal,uploaduser,multer) {
    const servicer = require("../services/servicer.js");

    
    app.get("/getRecomendNumberByIdUser", (req, res,next) => {  servicer.getRecomendNumberByIdUser(req,res,next)});
    app.get("/getRecomendBoolFromIds", (req, res,next) => {  servicer.getRecomendBoolFromIds(req,res,next)});
    
    app.get("/getUserById", (req, res,next) => {  servicer.getUserById(req,res,next)});
    app.get("/getUserLogin", (req, res,next) => {  servicer.getUserLogin(req,res,next)});
    app.get("/getUserBySession", (req, res,next) => {  servicer.getUserBySession(req,res,next)});

    app.get("/getUsers", (req, res,next) => {  servicer.getUsers(req,res,next)});
    app.get("/getPortfolioById", (req, res,next) => {  servicer.getPortfolioById(req,res,next)});
    app.get("/getPortfolioByIdRecent", (req, res,next) => {  servicer.getPortfolioByIdRecent(req,res,next)});
    app.get("/getPortfolioByIdUser", (req, res,next) => {  servicer.getPortfolioByIdUser(req,res,next)});
    app.get("/getTrendingPortfolio", (req, res,next) => {  servicer.getTrendingPortfolio(req,res,next)});
    app.get("/getProposalByApplicationIdUser", (req, res,next) => {  servicer.getProposalByApplicationIdUser(req,res,next)});


    app.get("/getProposalById", (req, res,next) => {  servicer.getProposalById(req,res,next)});
    app.get("/getTrendingProposal", (req, res,next) => {  servicer.getTrendingProposal(req,res,next)});
    app.get("/getProposalByIdRecent", (req, res,next) => {  servicer.getProposalByIdRecent(req,res,next)});
    app.get("/getProposalByIdUser", (req, res,next) => {  servicer.getProposalByIdUser(req,res,next)});
    app.get("/getProposalByIdProposal", (req, res,next) => {  servicer.getProposalByIdProposal(req,res,next)});

    app.get("/getTalentById", (req, res,next) => {  servicer.getTalentById(req,res,next)});
    app.get("/getTalentByIdRecent", (req, res,next) => {  servicer.getTalentByIdRecent(req,res,next)});
    app.get("/getTalentByIdUser", (req, res,next) => {  servicer.getTalentByIdUser(req,res,next)});

    app.get("/getKeywords", (req, res,next) => {  servicer.getKeywords(req,res,next)});
    app.get("/getCategories", (req, res,next) => {  servicer.getCategories(req,res,next)});
    app.get("/getMessagesToUser", (req, res,next) => {  servicer.getMessagesToUser(req,res,next)});
    
    app.get("/getTopRecommendedUsers", (req, res,next) => {  servicer.getTopRecommendedUsers(req,res,next)});
    app.get("/getTopViewedUsers", (req, res,next) => {  servicer.getTopViewedUsers(req,res,next)});
    

    app.post("/postCreateProposal",uploadsheet.none(), (req, res,next) => {  servicer.postCreateProposal(req,res,next)});
    app.post("/postCreateSheet",uploadsheet.single('file'), (req, res,next) => {  servicer.postCreateSheet(req,res,next,uploadsheet,multer)});
    app.post("/postRecomend",uploadsheet.none(), (req, res,next) => {  servicer.postRecomend(req,res,next)});
    app.post("/postMessage",uploadsheet.none(), (req, res,next) => {  servicer.postMessage(req,res,next)});
    app.post("/postDelRecomend",uploadsheet.none(),(req, res,next) => {  servicer.postDelRecomend(req,res,next)});
    app.post("/postClicks", uploadsheet.none(),(req, res,next) => {  servicer.postClicks(req,res,next)});
    app.post("/postApplication", uploadsheet.none(),(req, res,next) => {  servicer.postApplication(req,res,next)});

   
}
module.exports.router = router;