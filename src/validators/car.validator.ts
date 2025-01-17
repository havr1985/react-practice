import Joi from 'joi';

export const carValidator = Joi.object({
  brand: Joi.string()
    .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/)
    .max(20)
    .min(1)
    .required()
    .messages({
      'string.min': '"brand" must be at least 1 character long',
      'string.max': '"brand" must be at most 20 characters long',
      'string.pattern.base': '"brand" must only contain letters from supported languages'
    }),
  price: Joi.number().max(1000000).min(0).required().messages({
    'number.base': '"price" must be a number',
    'number.min': '"price" must be greater than or equal to 0',
    'number.max': '"price" must be less than or equal to 1,000,000'
  }),
  year: Joi.number().max(2024).min(1990).required().messages({
    'number.base': '"year" must be a number',
    'number.min': '"year" must be greater than or equal to 1990',
    'number.max': '"year" must be less than or equal to 2024'
  })
});
