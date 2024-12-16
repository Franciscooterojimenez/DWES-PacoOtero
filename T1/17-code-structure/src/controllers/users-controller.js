const users = [
  {id: '1', name: "Manu", age: 23, gender: 'male'},
  {id: '2', name: "Dani", age: 24, gender: 'male'},
  {id: '3', name: "Ayoze", age: 25, gender: 'male'},
];

export function getUsers(req, res) {
  if(users){
    return res.send(users);
  }
  return res.status(404).send({message: 'Users not found'});
}

export function getUser(req, res) {
  const {id} = req.params;
  const user = users.find(u => u.id === id);
  if(user){
    return res.send(user);
  }
  return res.status(404).send({message: 'User not found'});
}

export function postUser(req, res) {
  const body = req.body;
  if(!body.name || !body.name.trim()) return res.status(400).send({message: 'Invalid format'});
  const id = (parseInt(users[users.length - 1].id) + 1).toString();
  if(users.some(u => u.id === id)) return res.status(409).send({message: `user ${id} already exists`});
  users.push({id, ...body});
  return res.status(201).send({id, ...body});  
}

export function updateUser(req, res){
  const {id} = req.params;
  const user = users.find(u => u.id === id);
  if(!user) return res.status(404).send({message: 'User not found'});
  Object.entries(req.body).forEach(([key, value]) => {
    user[key] = value;
  })
  return res.send(user);
}

export function deleteUser(req, res){
  const {id} = req.params;
  const userIndex = users.findIndex(u => u.id === id);
  if(userIndex < 0) return res.status(404).send({message: 'User not found'});

  const [user] = users.splice(userIndex, 1);
  res.send(user);
}