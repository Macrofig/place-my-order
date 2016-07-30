import fixture from 'can-fixture';

const store = fixture.store([
  { state: 'CA', name: 'Casadina' },
  { state: 'NT', name: 'Alberny' }
],{});

fixture({
  'GET /api/cities': store.findAll,
  'GET /api/cities/{_id}': store.findOne,
  'POST /api/cities': store.create,
  'PUT /api/cities/{_id}': store.update,
  'DELETE /api/cities/{_id}': store.destroy
});

export default store;
