module.exports.getUserById = require("./User/getUserById.js");

module.exports.getUsers = require("./User/getUsers.js");

module.exports.postUpdateUser = require("./User/postUpdateUser.js");
module.exports.postCreateUser = require("./User/postCreateUser.js");
module.exports.postUploadImageUser = require("./User/postUploadImageUser.js");

module.exports.getUserLogin = require("./User/getUserLogin.js");
module.exports.getUserBySession = require("./User/getUserBySession.js");

module.exports.postClicks = require("./Clicks/postClicks.js");

module.exports.getPortfolioById = require("./Portfolio/getPortfolioById.js");
module.exports.getPortfolioByIdRecent = require("./Portfolio/getPortfolioByIdRecent.js");
module.exports.getPortfolioByIdUser = require("./Portfolio/getPortfolioByIdUser.js");
module.exports.getTrendingPortfolio = require("./Portfolio/getTrendingPortfolio.js");
module.exports.postUploadSheetFiles = require("./Portfolio/postUploadSheetFiles.js");

module.exports.postUploadProposalFiles = require("./Proposal/postUploadProposalFiles.js");
module.exports.getProposalByApplicationIdUser = require("./Proposal/getProposalByApplicationIdUser.js");

module.exports.getProposalByIdRecent = require("./Proposal/getProposalByIdRecent.js");
module.exports.getProposalByIdUser = require("./Proposal/getProposalByIdUser.js");
module.exports.getProposalByIdProposal = require("./Proposal/getProposalByIdProposal.js");
module.exports.getTrendingProposal = require("./Proposal/getTrendingProposal.js");
module.exports.postCreateProposal = require("./Proposal/postCreateProposal.js");
module.exports.getProposalById = require("./Proposal/getProposalById.js");


module.exports.getTalentById = require("./Talent/getTalentById.js");
module.exports.getTalentByIdRecent = require("./Talent/getTalentByIdRecent.js");
module.exports.getTalentByIdUser = require("./Talent/getTalentByIdUser.js");
module.exports.postCreateTalent = require("./Talent/postCreateTalent.js");
module.exports.postUpdateTalent = require("./Talent/postUpdateTalent.js");

module.exports.getCategories = require("./Category/getCategories.js");
module.exports.getKeywords = require("./Keyword/getKeywords.js");

module.exports.postApplication = require("./Application/postApplication.js");
module.exports.postUpdateSheet = require("./Portfolio/postUpdateSheet.js");
module.exports.postCreateSheet = require("./Portfolio/postCreateSheet.js");
module.exports.postRecomend = require("./Recommend/postRecomend.js");
module.exports.postUpdateProposal = require("./Proposal/postUpdateProposal.js");

module.exports.getRecomendNumberByIdUser = require("./Recommend/getRecomendNumberByIdUser.js");
module.exports.getRecomendBoolFromIds = require("./Recommend/getRecomendBoolFromIds.js");
module.exports.postDelRecomend = require("./Recommend/postDelRecomend.js");
module.exports.getTopRecommendedUsers = require("./Recommend/getTopRecommendedUsers.js");

module.exports.postMessage = require("./Message/postMessage.js");
module.exports.getMessagesToUser = require("./Message/getMessagesToUser.js");
module.exports.getNumberUnviewedMessages = require("./Message/getNumberUnviewedMessages.js");
module.exports.postViewedMessage = require("./Message/postViewedMessage.js");

module.exports.getTopViewedUsers = require("./Viewed/getTopViewedUsers.js");
module.exports.getTopBadgeUsers = require("./Badges/getTopBadgeUsers.js");

module.exports.dbconnect = require("./dbconnect.js");


