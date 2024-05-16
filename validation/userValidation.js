// Importiere das Validator-Paket
import { body, validationResult } from 'express-validator';

// User Validateoptions
export const userValidationOptions = [
    body('userName')
        .notEmpty().withMessage('Benutzername darf nicht leer sein.')
        .isLength({ min: 3 }).withMessage('Benutzername muss mindestens 3 Zeichen lang sein.'),
    body('email')
        .notEmpty().withMessage('E-Mail darf nicht leer sein.')
        .isEmail().withMessage('Ungültige E-Mail-Adresse.'),
    body('password')
        .notEmpty().withMessage('Passwort darf nicht leer sein.')
        .isLength({ min: 8 }).withMessage('Passwort muss mindestens 8 Zeichen lang sein.'),
    body('class')
        .notEmpty().withMessage('Klasse darf nicht leer sein.'),
    // Server validieren
    // body('server')
    //     .notEmpty().withMessage('Server darf nicht leer sein.')
    //     .isString().withMessage('Server muss ein String sein.')
    //     .custom((value) => true).withMessage('Ungültiger Server.')
];

// Validation check
export const userValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};