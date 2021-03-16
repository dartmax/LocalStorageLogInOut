const id = () => {
  return Math.floor(Math.random() * 100 + 1);
};

const imageSrc = "https://randomuser.me/api/portraits/men/";

const Contacts = [
  {
    name: "Ben Smith",
    imgUrl: `${imageSrc}${id()}.jpg`,
    phone: "555-555-555",
  },
  {
    name: "Mark Hill",
    imgUrl: `${imageSrc}${id()}.jpg`,
    phone: "999-999-9999",
  },
  {
    name: "Sam Shoe",
    imgUrl: `${imageSrc}${id()}.jpg`,
    phone: "444-333-5678",
  },
  {
    name: "Larry Cox",
    imgUrl: `${imageSrc}${id()}.jpg`,
    phone: "684-344-5678",
  }
];

export default Contacts;
