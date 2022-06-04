import mongoose from "mongoose";

const ResearchSchema = mongoose.Schema({
    researchTopic: {
        type: String
    },
    researchField: {
        type: String
    },
    description: {
        type: String
    },
    supervisorDetails: {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        userDetails: {
            userQNumber: {
                type: String,
                required: true,
                unique: true
            },
            userEmail: {
                type: String,
                required: true,
            },
            userName: {
                type: String,
                required: true
            },
            userContactNumber: {
                type: String,
                required: true
            },
            userAddress: {
                type: String,
                required: true
            },
            userFaculty: {
                type: String
            },
            userField: {
                type: String
            },
            // tags: e.target.value.split(',')
            userSpecializedCriteria: [
                String
            ],
            userType: {
                type: String,
                required: true
            },
        },
        value: String,
        label: String
    },
    coSupervisorDetails: {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        userDetails: {
            userQNumber: {
                type: String,
                required: true,
                unique: true
            },
            userEmail: {
                type: String,
                required: true,
            },
            userName: {
                type: String,
                required: true
            },
            userContactNumber: {
                type: String,
                required: true
            },
            userAddress: {
                type: String,
                required: true
            },
            userFaculty: {
                type: String
            },
            userField: {
                type: String
            },
            // tags: e.target.value.split(',')
            userSpecializedCriteria: [
                String
            ],
            userType: {
                type: String,
                required: true
            },
        },
        value: String,
        label: String
    },
    panelMemberDetails: {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        userDetails: {
            userQNumber: {
                type: String,
                required: true,
                unique: true
            },
            userEmail: {
                type: String,
                required: true,
            },
            userName: {
                type: String,
                required: true
            },
            userContactNumber: {
                type: String,
                required: true
            },
            userAddress: {
                type: String,
                required: true
            },
            userFaculty: {
                type: String
            },
            userField: {
                type: String
            },
            // tags: e.target.value.split(',')
            userSpecializedCriteria: [
                String
            ],
            userType: {
                type: String,
                required: true
            },
        },
        value: String,
        label: String
    },
    groupDetails: {
        groupName: {
            type: String,
            required: true
        },
        groupID: {
            type: String,
        },
        memberCount: String,
        // researchID: String,
        // finalID: String,
        groupDetails: [
            {
                userDetails: {
                    userQNumber: String,
                    userEmail: String,
                    userName: String,
                    userContactNumber: String,
                    userAddress: String,
                    userType: String,
                },
                states: String,
                _id: String,
                value: String,
                label: String
            }
        ],
    },
    status: {
        type: String,
        default: "1"
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }

});

const Research = mongoose.model('Research', ResearchSchema);

export default Research;