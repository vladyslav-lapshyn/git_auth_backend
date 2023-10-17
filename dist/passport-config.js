import passport from "passport";
import { User } from "./models/User.model.js";
passport.serializeUser(function(user, done) {
    done(null, user.id); // Серіалізувати користувача, зберігаючи його ID у сесії
});
passport.deserializeUser(function(id, done) {
    User.findByPk(id).then((user)=>{
        if (!user) {
            done(null, false); // Користувач не знайдений
        } else {
            done(null, user); // Десеріалізувати користувача
        }
    }).catch((err)=>{
        done(err, false); // Помилка під час пошуку користувача
    });
});
