import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryinMemory';
import { CreateCarUseCase } from '@modules/cars/useCases/createCar/CreateCarUseCase';
import { AppError } from '@shared/errors/AppError';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('create car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able to create new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'teste name',
      description: 'teste description',
      daily_rate: 100,
      license_plate: 'ABC-123',
      fine_amount: 50,
      brand: 'Brand',
      category_id: 'category teste',
    });

    expect(car).toHaveProperty('id');
  });

  it('should not be able to create a car with exists license plate', async () => {
    await createCarUseCase.execute({
      name: 'Car1',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    await expect(
      createCarUseCase.execute({
        name: 'Car2',
        description: 'Description Car',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'category',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should  be able to create a car with available true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car Available',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABCD-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    console.log(car);

    expect(car.available).toBe(true);
  });
});
