';
import { RentalsRepositoryInMemory } from '@modules/rentals/repositories/in-memory/RentalsReposiryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateRentalUseCase } from './CreateRentalUseCase';

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;


describe('Create Rental', () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();

    createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);
  });

  it(' should be able to create a new rental', async () => {
  

    const rental = await createRentalUseCase.execute({
      user_id: '12345',
      car_id: 'asdasdas',
      expected_return_date:
    });

    expect(rental).toHaveProperty('id');
    expect(rental).toHaveProperty('start_date');
  });

  it(' should not be able to create a new rental if there is another open to the same user ', async () => {
    await rentalsRepositoryInMemory.create({
      car_id: '1111',
      
    });

    await expect(
      createRentalUseCase.execute({
        user_id: '12345',
        car_id: '121212',
        
      }),
    ).rejects.toEqual(new AppError("There's a rental in progress for user!"));
  });

  it(' should not be able to create a new rental if there is another open to the same car ', async () => {
    await rentalsRepositoryInMemory.create({
      car_id: 'test',
      
      user_id: '12345',
    });

    await expect(
      createRentalUseCase.execute({
        user_id: '321',
        car_id: 'test',
        expected_return_date,
    ).rejects.toEqual(new AppError('Car is unavailable'));
  });

 
});
