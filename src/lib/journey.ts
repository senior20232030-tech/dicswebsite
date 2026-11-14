import photo0 from "@/assets/journey/page-10-image-1.jpg.asset.json";
import photo1 from "@/assets/journey/page-10-image-2.jpg.asset.json";
import photo2 from "@/assets/journey/page-11-image-1.jpg.asset.json";
import photo3 from "@/assets/journey/page-11-image-2.jpg.asset.json";
import photo4 from "@/assets/journey/page-11-image-3.jpg.asset.json";
import photo5 from "@/assets/journey/page-11-image-4.jpg.asset.json";
import photo6 from "@/assets/journey/page-11-image-5.jpg.asset.json";
import photo7 from "@/assets/journey/page-12-image-1.jpg.asset.json";
import photo8 from "@/assets/journey/page-12-image-2.jpg.asset.json";
import photo9 from "@/assets/journey/page-12-image-3.jpg.asset.json";
import photo10 from "@/assets/journey/page-13-image-0.jpg.asset.json";
import photo11 from "@/assets/journey/page-13-image-1.jpg.asset.json";
import photo12 from "@/assets/journey/page-13-image-2.jpg.asset.json";
import photo13 from "@/assets/journey/page-13-image-3.jpg.asset.json";
import photo14 from "@/assets/journey/page-13-image-5.jpg.asset.json";
import photo15 from "@/assets/journey/page-14-image-1.jpg.asset.json";
import photo16 from "@/assets/journey/page-14-image-2.jpg.asset.json";
import photo17 from "@/assets/journey/page-15-image-1.jpg.asset.json";
import photo18 from "@/assets/journey/page-15-image-2.jpg.asset.json";
import photo19 from "@/assets/journey/page-15-image-3.jpg.asset.json";
import photo20 from "@/assets/journey/page-16-image-1.jpg.asset.json";
import photo21 from "@/assets/journey/page-16-image-2.jpg.asset.json";
import photo22 from "@/assets/journey/page-16-image-3.jpg.asset.json";
import photo23 from "@/assets/journey/page-16-image-4.jpg.asset.json";
import photo24 from "@/assets/journey/page-17-image-2.jpg.asset.json";
import photo25 from "@/assets/journey/page-17-image-3.jpg.asset.json";
import photo26 from "@/assets/journey/page-17-image-4.jpg.asset.json";
import photo27 from "@/assets/journey/page-17-image-5.jpg.asset.json";
import photo28 from "@/assets/journey/page-18-image-0.jpg.asset.json";
import photo29 from "@/assets/journey/page-18-image-1.jpg.asset.json";
import photo30 from "@/assets/journey/page-18-image-2.jpg.asset.json";
import photo31 from "@/assets/journey/page-18-image-3.jpg.asset.json";
import photo32 from "@/assets/journey/page-19-image-0.jpg.asset.json";
import photo33 from "@/assets/journey/page-19-image-1.jpg.asset.json";
import photo34 from "@/assets/journey/page-19-image-2.jpg.asset.json";
import photo35 from "@/assets/journey/page-19-image-3.jpg.asset.json";
import photo36 from "@/assets/journey/page-7-image-0.jpg.asset.json";
import photo37 from "@/assets/journey/page-9-image-1.jpg.asset.json";
import photo38 from "@/assets/journey/page-9-image-2.jpg.asset.json";
import photo39 from "@/assets/journey/page-9-image-3.jpg.asset.json";
import photo40 from "@/assets/journey/page-9-image-4.jpg.asset.json";
import { catalogAssetUrl } from "./catalog-asset-url";

export const journeyPhotos: Record<number, string[]> = {
  10: [catalogAssetUrl(photo0), catalogAssetUrl(photo1)],
  11: [catalogAssetUrl(photo2), catalogAssetUrl(photo3), catalogAssetUrl(photo4), catalogAssetUrl(photo5), catalogAssetUrl(photo6)],
  12: [catalogAssetUrl(photo7), catalogAssetUrl(photo8), catalogAssetUrl(photo9)],
  13: [catalogAssetUrl(photo10), catalogAssetUrl(photo11), catalogAssetUrl(photo12), catalogAssetUrl(photo13), catalogAssetUrl(photo14)],
  14: [catalogAssetUrl(photo15), catalogAssetUrl(photo16)],
  15: [catalogAssetUrl(photo17), catalogAssetUrl(photo18), catalogAssetUrl(photo19)],
  16: [catalogAssetUrl(photo20), catalogAssetUrl(photo21), catalogAssetUrl(photo22), catalogAssetUrl(photo23)],
  17: [catalogAssetUrl(photo24), catalogAssetUrl(photo25), catalogAssetUrl(photo26), catalogAssetUrl(photo27)],
  18: [catalogAssetUrl(photo28), catalogAssetUrl(photo29), catalogAssetUrl(photo30), catalogAssetUrl(photo31)],
  19: [catalogAssetUrl(photo32), catalogAssetUrl(photo33), catalogAssetUrl(photo34), catalogAssetUrl(photo35)],
  7: [catalogAssetUrl(photo36)],
  9: [catalogAssetUrl(photo37), catalogAssetUrl(photo38), catalogAssetUrl(photo39), catalogAssetUrl(photo40)],
};

export const milestones = [
  { year: "1996", title: "The beginning", detail: "Started as an automation firm and joined hands with Toshiba." },
  { year: "2000", title: "Chennai wing", detail: "Expanded our presence to Chennai." },
  { year: "2004", title: "OMRON & panel integration", detail: "Joined hands with OMRON and established a control panel integration facility in Bangalore." },
  { year: "2006", title: "Pro-face", detail: "Joined hands with Pro-face." },
  { year: "2007", title: "Crouzet & Crydom", detail: "Joined hands with Crouzet and Crydom." },
  { year: "2008", title: "Autonics", detail: "Joined hands with Autonics." },
  { year: "2009", title: "Fuji Electric", detail: "Joined hands with Fuji Electric." },
  { year: "2010", title: "Hyderabad & manufacturing", detail: "Opened our Hyderabad wing and moved to a larger manufacturing facility in Bangalore." },
  { year: "2011", title: "Mumbai wing", detail: "Expanded our presence to Mumbai." },
  { year: "2014", title: "Coimbatore wing", detail: "Expanded our presence to Coimbatore." },
  { year: "2017", title: "Our own Bangalore facility", detail: "Moved to our own larger facility in Bangalore." },
  { year: "2018", title: "Our own Mumbai facility", detail: "Moved to our own facility in Mumbai." },
  { year: "2020", title: "CKD & Noida", detail: "Joined hands with CKD and started our Noida office." },
  { year: "2022", title: "A new chapter of growth", detail: "Joined hands with IDEC and Wöhner, moved to our own larger facility in Chennai and started our Lucknow office." },
  { year: "2023", title: "Vizag, Pune & PATLITE", detail: "Started our Vizag office, moved to a larger office in Pune and joined hands with PATLITE." },
];
export const journeySectors = ["Machine Tool", "SPM", "Automobile", "Material Handling", "Elevator", "Printing & Packaging", "Pharma", "Hoist & Crane", "Solar", "Power"];
export const journeyOffices = [
 { city: "Bangalore · Head Office", page: 9, address: "B-261, 6th Main, 2nd Stage, Peenya Industrial Estate, Bangalore, Karnataka 560058", phone: "+91-80-23235465 / 23232773", email: "bangalore@dicsglobal.com" },
 { city: "Chennai", page: 11, address: "A4/3, Krishna Tower, III Phase, Thiru-vi-ka Industrial Estate, Guindy, Chennai, Tamil Nadu 600032", phone: "+91-44-22501141 / 22501142", email: "chennai@dicsglobal.com" },
 { city: "Mumbai", page: 13, address: "101, Mayuresh Chambers, Plot No. 60, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614", phone: "+91-22-27562007", email: "mumbai@sansree.com" },
 { city: "Coimbatore", page: 15, address: "1054, Gowtham Centre Annexe, Avinashi Road, Coimbatore 641018", phone: "+91-422-2236446", email: "coimbatore@dicsglobal.com" },
 { city: "Hyderabad", page: 16, address: "16/1/25, 1st Floor, Road No. 7, IDA Nacharam, Hyderabad, Telangana 500076", phone: "+91-40-27179400", email: "hyderabad@sansree.com" },
 { city: "Noida", page: 17, address: "C-130, Ground Floor, Sector 65, Gautam Buddha Nagar, Noida, Uttar Pradesh 201301", phone: "+91-120-4137674", email: "noida@dicsglobal.com" },
 { city: "Pune", page: 18, address: "165, T Block, MIDC Chowk, Bhosari, Pune 411026", phone: "+91-20-29982001", email: "pune@sansree.com" },
 { city: "Visakhapatnam", page: 19, address: "Plot No. 16, D. No. 27-1-77, Vidyanagar, Srinagar, Gajuwaka, Chinagantyada Village, Visakhapatnam, Andhra Pradesh 530026", phone: "+91-9989744811", email: "vizag@sansree.com" },
];
