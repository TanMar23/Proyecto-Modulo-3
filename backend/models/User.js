const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: {
      type: String,
      // required: true
    },
    name: String,
    lastName: String,
    role: {
      type:String,
      enum: ['ADMIN', 'USUARIO'],
      default: 'USUARIO'
    },
    fotoPerfil: {
      type: String,
      default: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" 
    },
    level: {
      type: Number,
      default: 1
    },
    pin: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
