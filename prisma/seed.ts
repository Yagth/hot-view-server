import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  await prisma.user.upsert({
    where: { email: 'CI@gmail.com' },
    update: {},
    create: {
      email: 'CI@gmail.com',
      firstName: 'CI admin',
      lastName: 'CI admin',
      role: 'ADMIN',
      // eslint-disable-next-line line-comment-position
      password: '$2b$10$AVzOzjgle8jTpZqvAdjTNere73KxU4bP.vEw.HvM9PPe0TLhj70/e', // admin
      phoneNumber: 0,
    },
  });
  await prisma.user.upsert({
    where: { email: 'CI1@gmail.com' },
    update: {},
    create: {
      email: 'CI1@gmail.com',
      firstName: 'CI basic',
      lastName: 'CI basic',
      role: 'BASIC',
      password: '$2b$10$AVzOzjgle8jTpZqvAdjTNere73KxU4bP.vEw.HvM9PPe0TLhj70/e',
      phoneNumber: 0,
    },
  });

  await prisma.article.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi scelerisque eu ultrices vitae. Vitae tortor condimentum lacinia quis vel eros donec. Viverra adipiscing at in tellus integer feugiat. Consequat interdum varius sit amet. Leo urna molestie at elementum. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Sed nisi lacus sed viverra tellus. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Libero enim sed faucibus turpis. Sit amet facilisis magna etiam tempor orci eu. Eu facilisis sed odio morbi. Dictum fusce ut placerat orci nulla pellentesque dignissim.',
      view: 1000,
      categoryId: 'categroy1',
    },
  });

  await prisma.article.upsert({
    where: { id: '2' },
    update: {},
    create: {
      id: '2',
      title: 'arcu odio ut sem nulla pharetra diam sit amet nisl',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl. Non quam lacus suspendisse faucibus interdum posuere. Sed lectus vestibulum mattis ullamcorper velit. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. In egestas erat imperdiet sed euismod. Imperdiet nulla malesuada pellentesque elit eget gravida. Et sollicitudin ac orci phasellus egestas tellus. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Sodales neque sodales ut etiam sit amet nisl. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Egestas integer eget aliquet nibh. Eu mi bibendum neque egestas congue quisque egestas diam in. Odio facilisis mauris sit amet massa vitae tortor. Auctor eu augue ut lectus. Enim sit amet venenatis urna cursus eget nunc.',
      view: 100,
      categoryId: 'categroy2',
    },
  });

  await prisma.article.upsert({
    where: { id: '3' },
    update: {},
    create: {
      id: '3',
      title:
        'vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Turpis tincidunt id aliquet risus feugiat in ante. Neque egestas congue quisque egestas diam in. In cursus turpis massa tincidunt dui ut ornare lectus. Duis at consectetur lorem donec. Pulvinar pellentesque habitant morbi tristique. Arcu risus quis varius quam quisque id. Egestas quis ipsum suspendisse ultrices gravida dictum. Ornare lectus sit amet est placerat in. Nunc sed blandit libero volutpat sed. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Eu non diam phasellus vestibulum lorem sed risus. In metus vulputate eu scelerisque felis. Non arcu risus quis varius quam quisque. Tempus urna et pharetra pharetra massa massa ultricies mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.',
      view: 0,
      categoryId: 'categroy3',
    },
  });

  await prisma.article.upsert({
    where: { id: '4' },
    update: {},
    create: {
      id: '4',
      title: 'cursus euismod quis viverra nibh cras pulvinar mattis nunc sed',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Vitae justo eget magna fermentum iaculis eu non. Est ullamcorper eget nulla facilisi etiam. Ut morbi tincidunt augue interdum. Sem integer vitae justo eget. Leo duis ut diam quam nulla porttitor massa. Ac turpis egestas integer eget aliquet nibh praesent tristique. Metus dictum at tempor commodo. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Semper eget duis at tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Dolor sit amet consectetur adipiscing elit ut. Vestibulum sed arcu non odio euismod lacinia at. Consectetur lorem donec massa sapien faucibus et molestie.',
      view: 223000,
      categoryId: 'categroy3',
    },
  });

  await prisma.article.upsert({
    where: { id: '5' },
    update: {},
    create: {
      id: '5',
      title:
        'nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt tortor aliquam nulla facilisi. Urna duis convallis convallis tellus id interdum. Neque convallis a cras semper auctor. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Sit amet consectetur adipiscing elit. Aenean euismod elementum nisi quis. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Augue mauris augue neque gravida in fermentum et. Nulla facilisi etiam dignissim diam quis. Donec enim diam vulputate ut pharetra sit amet. Interdum velit laoreet id donec ultrices tincidunt arcu. Gravida rutrum quisque non tellus orci ac auctor augue. Ullamcorper sit amet risus nullam eget felis. Fames ac turpis egestas integer eget aliquet. Lectus mauris ultrices eros in cursus turpis massa tincidunt.',
      view: 23000,
      categoryId: 'categroy5',
    },
  });

  await prisma.article.upsert({
    where: { id: '6' },
    update: {},
    create: {
      id: '6',
      title: 'morbi tristique senectus et netus et malesuada fames ac turpis',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat nisl. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. In hac habitasse platea dictumst quisque sagittis purus. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Sed elementum tempus egestas sed sed. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Vitae ultricies leo integer malesuada nunc vel risus commodo. Et tortor consequat id porta nibh. Augue mauris augue neque gravida in fermentum et. Viverra justo nec ultrices dui sapien eget. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Pellentesque sit amet porttitor eget dolor. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Eget mauris pharetra et ultrices neque ornare aenean.',
      view: 1000,
      categoryId: 'categroy6',
    },
  });

  await prisma.article.upsert({
    where: { id: '7' },
    update: {},
    create: {
      id: '7',
      title:
        'odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit egestas dui id ornare arcu odio ut sem nulla. Tristique magna sit amet purus gravida. Amet luctus venenatis lectus magna fringilla urna porttitor. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nisi vitae suscipit tellus mauris. Lacus vestibulum sed arcu non odio. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Proin gravida hendrerit lectus a. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Nisi lacus sed viverra tellus in hac habitasse. Dui vivamus arcu felis bibendum. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Et netus et malesuada fames ac turpis egestas integer eget. Orci a scelerisque purus semper eget duis.',
      view: 2340,
      categoryId: 'categroy7',
    },
  });

  await prisma.article.upsert({
    where: { id: '8' },
    update: {},
    create: {
      id: '8',
      title: 'nunc sed augue lacus viverra vitae congue eu consequat ac',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit. Massa id neque aliquam vestibulum. Gravida cum sociis natoque penatibus. At ultrices mi tempus imperdiet nulla. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Dui faucibus in ornare quam viverra orci sagittis. Aliquet bibendum enim facilisis gravida neque convallis. Massa enim nec dui nunc mattis enim ut. Nullam eget felis eget nunc.',
      view: 0,
      categoryId: 'categroy8',
    },
  });

  await prisma.article.upsert({
    where: { id: '9' },
    update: {},
    create: {
      id: '9',
      title:
        'duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Lorem ipsum dolor sit amet. Ut pharetra sit amet aliquam id diam. Libero justo laoreet sit amet cursus sit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Ultricies leo integer malesuada nunc vel risus commodo. Leo duis ut diam quam nulla porttitor. In dictum non consectetur a. Egestas sed tempus urna et. Tortor at risus viverra adipiscing at in tellus integer feugiat. Volutpat sed cras ornare arcu dui vivamus arcu. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Eu sem integer vitae justo eget. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis.',
      view: 1000,
      categoryId: 'categroy9',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
