import faker from "faker";

const posts = [...new Array(20)].map(() => {
  return {
    user: {
      avatar: faker.random.image(),
      username: faker.name.firstName() + " " + faker.name.lastName(),
    },
    text: faker.lorem.lines(3),
    image: faker.random.image(),
    createdAt: faker.date.between("04-03-2000", "06-10-2020").toString(),
    reactions: [
      {
        type: "Like",
        text: "like",
        me: true,
      },
      {
        type: "Comment",
        text: "comment",
        me: false,
      },
    ],
  };
});

export default posts;
