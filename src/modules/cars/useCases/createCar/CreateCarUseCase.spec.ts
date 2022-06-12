import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarRepositotyinMemory';
import { CreateCarUseCase } from '@modules/cars/useCases/createCar/CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('create car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able to create new car', async () => {
    await createCarUseCase.execute({
      name: 'teste name',
      description: 'teste description',
      daily_rate: 100,
      license_plate: 'ABC-123',
      fine_amount: 50,
      brand: 'Brand',
      category_id: 'category teste',
    });
  });
});
