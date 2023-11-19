const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser(username, email, passwordHash, is_admin=false) {
  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password_hash: passwordHash,
      is_admin,
    },
  });
  return newUser;
}

async function createUserHierarchy(parentUserId, childUserId, relationshipType) {
  const newHierarchy = await prisma.userHierarchy.create({
    data: {
      parent_user_id: parentUserId,
      child_user_id: childUserId,
      relationship_type: relationshipType,
    },
  });
  return newHierarchy;
}

async function createSalesDistribution(userId, productId, salesAmount, date) {
  const newDistribution = await prisma.salesDistribution.create({
    data: {
      user_id: userId,
      product_id: productId,
      sales_amount: salesAmount,
      date,
    },
  });
  return newDistribution;
}

async function createProduct(productName, price) {
  const newProduct = await prisma.products.create({
    data: {
      product_name: productName,
      price
    },
  });
  return newProduct;
}

createUser('JohnDoe', 'john@example.com', '123', false)
  .then(newUser => {
    console.log('Created user:', newUser);
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });

createSalesDistribution(1, 1, 100.50, new Date())
  .then(newDistribution => {
    console.log('Created sales distribution:', newDistribution);
  })
  .catch(error => {
    console.error('Error creating sales distribution:', error);
  });

createProduct("car oil", 100.50)
  .then(createProduct => {
    console.log('Created product:', createProduct);
  })
  .catch(error => {
    console.error('Error creating product:', error);
  });

createUserHierarchy(1, 2, "Distributer")
  .then(createUserHierarchy => {
    console.log('Created UserHierarchy:', createUserHierarchy);
  })
  .catch(error => {
    console.error('Error creating UserHierarchy:', error);
  });