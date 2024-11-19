import client from "./client";
const endpoint = "/recipes";
const featuredendpoint = endpoint + "?limit=10&select=name,image,rating";
const signatureitemendpoint =
  endpoint + "?limit=10&skip=10&select=name,image,rating";
const recentpurchaseendpoint =
  endpoint + "?limit=10&skip=20&select=name,image,rating";
const menuListendpoint = endpoint + "?limit=10&select=name,image,rating";
const customerFavoriteendpoint =
  endpoint + "?limit=10&skip=30&select=name,image,rating";
const fullDetailsendpoint = endpoint;
const medialistendpoint = endpoint;
const getReceipes = () => client.get(endpoint);
const getFeatured = () => client.get(featuredendpoint);
const getSignature = () => client.get(signatureitemendpoint);
const getRecentPurchase = () => client.get(recentpurchaseendpoint);
const getMenuList = () => client.get(menuListendpoint);
const getFullDetails = (id) => client.get(fullDetailsendpoint + "/" + id);
const getCustomersFavourite = () => client.get(customerFavoriteendpoint);
const getMediaList = (offset_val) => {
  const skipparam = offset_val != 0 ? "&skip=" + offset_val : "";
  const endUrl = "?limit=10" + skipparam + "&select=name,image,rating";
  (client.get(medialistendpoint + endUrl))};
export default {
  getReceipes,
  getFeatured,
  getSignature,
  getRecentPurchase,
  getMenuList,
  getFullDetails,
  getCustomersFavourite,
  getMediaList,
};
