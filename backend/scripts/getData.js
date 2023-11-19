const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUserById(userId) {
  const user = await prisma.user.findUnique({
    where: {
      user_id: userId,
    },
  });
  return user;
}

async function getAllUsers() {
  const users = await prisma.user.findMany();
  return users;
}

async function getUserHierarchiesByParentId(parentUserId) {
  const hierarchies = await prisma.userHierarchy.findMany({
    where: {
      parent_user_id: parentUserId,
    },
  });
  return hierarchies;
}

async function getSalesByUserId(userId) {
  const sales = await prisma.salesDistribution.findMany({
    where: {
      user_id: userId,
    },
  });
  return sales;
}

async function getAllProducts() {
  const products = await prisma.products.findMany();
  return products;
}

async function getProduct(productId) {
    const product = await prisma.products.findUnique(
        {
            where: {
                product_id: productId,
            }
        },
    );
    return product;
}

switch (6) {
    case 1:
        getUserById(1)
          .then(user => {
            console.log('User by ID:', user);
          })
          .catch(error => {
            console.error('Error fetching user:', error);
          });        
          break;
    case 2:
        getAllUsers()
          .then(users => {
            console.log('All users:', users);
          })
          .catch(error => {
            console.error('Error fetching users:', error);
          });    
    break;
    case 3:
        getSalesByUserId(1)
          .then(sales => {
            console.log('Sales by user ID:', sales);
          })
          .catch(error => {
            console.error('Error fetching sales:', error);
          });    
    break;
    case 4:
        getUserHierarchiesByParentId(1)
          .then(userhierarchy => {
            console.log('UserHierarch by parentID:', userhierarchy);
          })
          .catch(error => {
            console.error('Error fetching UserHierarch:', error);
          });    
    break;
    case 5:
        getAllProducts()
          .then(products => {
            console.log('All products:', products);
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });    
    break;
    case 6:
        getProduct(1)
          .then(product => {
            console.log('Product by ID:', product);
          })
          .catch(error => {
            console.error('Error fetching product:', error);
          });    
    break;
    
    default:
        break;
}