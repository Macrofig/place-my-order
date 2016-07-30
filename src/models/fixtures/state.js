import fixture from 'can-fixture';

const store = fixture.store([
  { name: 'Calisota', short: 'CA' },
  { name: 'New Troy', short: 'NT'}
],{});

fixture({
  'GET /api/states': store.findAll,
  'GET /api/states/{_id}': store.findOne,
  'POST /api/states': store.create,
  'PUT /api/states/{_id}': store.update,
  'DELETE /api/states/{_id}': store.destroy
});

export default store;
