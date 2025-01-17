import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { carValidator } from '../../validators/car.validator.ts';
import { createCar } from '../../api/api.service.ts';
import { formStyles } from './form-styles.ts';
import { useState } from 'react';

type carForm = {
  brand: string;
  price: number;
  year: number;
};

export const AddCarForm = () => {
  const [successful, setSuccessful] = useState<boolean | null>(null);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid }
  } = useForm<carForm>({ mode: 'all', resolver: joiResolver(carValidator) });

  const submitHandler = async (formData: carForm) => {
    try {
      await createCar(formData);
      reset();
      setSuccessful(true);
    } catch (err) {
      setSuccessful(false);
      console.log(err);
    }
  };
  return (
    <div className="w-[50%] mx-auto px-4 py-8 border border-black rounded-2xl">
      <div className="text-2xl font-bold text-center pb-8">Add car</div>
      <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4">
        <label className={formStyles.label}>
          Enter brand
          <input type="text" {...register('brand')} className={formStyles.input} />
          {errors.brand && <div className={formStyles.error}>{errors.brand.message}</div>}
        </label>
        <label className={formStyles.label}>
          Enter price
          <input type="number" {...register('price')} className={formStyles.input} />
          {errors.price && <div className={formStyles.error}>{errors.price.message}</div>}
        </label>
        <label className={formStyles.label}>
          Enter year
          <input type="number" {...register('year')} className={formStyles.input} />
          {errors.year && <div className={formStyles.error}>{errors.year.message}</div>}
        </label>
        <button
          disabled={!isValid}
          className={`py-2 px-4 rounded-lg text-white font-semibold transition ${
            isValid
              ? 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}>
          Send
        </button>
        <>
          {successful === true && <div className="text-center text-green-500">Successfully!</div>}
          {successful === false && (
            <div className="text-center text-red-500">Error! Try again later!</div>
          )}
        </>
      </form>
    </div>
  );
};
