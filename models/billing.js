module.exports = (sequelize, DataTypes) => {
    const Billing = sequelize.define("Billing", {
        fullName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'no name provided'
                },
                contains: {
                    args: '\s',
                    msg: 'full name required'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'no email provided'
                }
            },
            isEmail: true
        },
        address: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'no address provided'
                }
            }
        },
        city: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'no city provided'
                }
            }
        },
        state: {
<<<<<<< HEAD
            type: DataTypes.STRING
=======
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true, 
                    msg: 'no city provided'
                }
            }

>>>>>>> c471dd36d92313315b2159e2841a41f33301aeab
        },
        zip: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    args: true, 
                    msg: 'no zip provided'
                }
            }
        },
        ccn: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    args: true, 
                    msg: 'no credit card number provided'
                },
                isCreditCard: {
                    args: true,
                    msg: 'not a valid credit card number'
                }
            }
        },
        cvv: {
            type: DataTypes.INTEGER,
            validate: {
                len: {
                    args: [3,4],
                    msg: 'not a valid cvv'
            }
        },
        expiry_month: {
            type: DataTypes.INTEGER,
            validate: {
                len: {
                    args: [2,2],
                    msg: 'not a valid expiry month'
                }
            }
        },
        expiry_year: {
            type: DataTypes.INTEGER,
            validate: {
                len: {
                    args: [4, 4],
                    msg: 'not a valid expiry year'
                }
            }
        },
        profile_name: {
            type: DataTypes.STRING,
        }
    }
        
})
return Billing
}
