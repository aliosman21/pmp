export const schema = {
    "type": "object",
    "properties": {
        "fullName": {
            "type": "string",
            "minLength": 3,
            "description": "Please enter your full name"
        },
        "weight": {
            "type": "number",
            "description": "Please enter your weight"
        },
        "height": {
            "type": "number",
            "description": "Please enter your height"
        },
        "birthDate": {
            "type": "string",
            "format": "date",
            "description": "Please enter your birth date."
        },
        "gender": {
            "type": "string",
            "enum": [
                "Male",
                "Female"
            ]
        },
        "pregnancy": {
            "type": "string",
            "enum": [
                "Yes",
                "No",
            ]
        },
        "oralContraceptive": {
            "type": "string",
            "enum": [
                "Yes",
                "No",
            ]
        },

        // ----------------------------------------------------------- MEDICAL HISTORY -------------------------------------- //
        "anemia": {
            "type": "boolean"
        },
        "arthritis": {
            "type": "boolean"
        },
        "asthma": {
            "type": "boolean"
        },
        "cancer": {
            "type": "boolean"
        },
        "chronicObstructivePulmonary": {
            "type": "boolean"
        },
        "clottingDisorder": {
            "type": "boolean"
        },
        "congestiveHeartFailure": {
            "type": "boolean"
        },
        "crhonsDisease": {
            "type": "boolean"
        },
        "depression": {
            "type": "boolean"
        },
        "diabetes": {
            "type": "boolean"
        },
        "emphysema": {
            "type": "boolean"
        },
        "endocrineProblems": {
            "type": "boolean"
        },
        "GERD": {
            "type": "boolean"
        },
        "glucoma": {
            "type": "boolean"
        },
        "hepatitis": {
            "type": "boolean"
        },
        "HIV-AIDS": {
            "type": "boolean"
        },
        "hypertension": {
            "type": "boolean"
        },
        "kidneyDisease": {
            "type": "boolean"
        },
        "myocardialInfraction": {
            "type": "boolean"
        },
        "pepticUlcerDisease": {
            "type": "boolean"
        },
        "seizures": {
            "type": "boolean"
        },
        "stroke": {
            "type": "boolean"
        },
        "ulcerativeColitis": {
            "type": "boolean"
        },
        "otherDiseases": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "disease": {
                        "type": "string",
                    },
                    "diseaseJustification": {
                        "type": "string",
                    },
                }
            }
        },

        // ----------------------------------------------------------- FAMILY HISTORY -------------------------------------- //
        "familyAnemia": {
            "type": "boolean"
        },
        "familyDiabetes": {
            "type": "boolean"
        },
        "familyBloodClot": {
            "type": "boolean"
        },
        "familyHeartDisease": {
            "type": "boolean"
        },
        "familyStroke": {
            "type": "boolean"
        },
        "familyHypertension": {
            "type": "boolean"
        },
        "familyAnesthesiaReaction": {
            "type": "boolean"
        },
        "familyBleedingProblems": {
            "type": "boolean"
        },
        "familyHepatitis": {
            "type": "boolean"
        },
        "familyOther": {
            "type": "boolean"
        },
        "familyCancer": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "cancerType": {
                        "type": "string",
                    },
                }
            }
        },

        // ----------------------------------------------------------- Surgical HISTORY -------------------------------------- //
        "adrenalGlandSurgery": {
            "type": "boolean"
        },
        "appendectomy": {
            "type": "boolean"
        },
        "bariatricSurgery": {
            "type": "boolean"
        },
        "bladderSurgery": {
            "type": "boolean"
        },
        "breastSurgery": {
            "type": "boolean"
        },
        "cesareanSectionSurgery": {
            "type": "boolean"
        },
        "cholecystectomy": {
            "type": "boolean"
        },
        "colonSurgery": {
            "type": "boolean"
        },
        "coronaryArteryBypassGraft": {
            "type": "boolean"
        },
        "esophagusSurgery": {
            "type": "boolean"
        },
        "gastricBypassSurgery": {
            "type": "boolean"
        },
        "hemorrhoidSurgery": {
            "type": "boolean"
        },
        "hernia": {
            "type": "boolean"
        },
        "hysterectomyOperation": {
            "type": "boolean"
        },
        "kidneySurgery": {
            "type": "boolean"
        },
        "neckSurgery": {
            "type": "boolean"
        },
        "prostateSurgery": {
            "type": "boolean"
        },
        "smallIntestineSurgery": {
            "type": "boolean"
        },
        "spineSurgery": {
            "type": "boolean"
        },
        "stomachSurgery": {
            "type": "boolean"
        },
        "thyroidSurgery": {
            "type": "boolean"
        },
        "otherSurgeries": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "surgery": {
                        "type": "string",
                    },
                    "justification": {
                        "type": "string",
                    },
                }
            }
        },
        "medicationHistory": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "drug": {
                        "type": "string",
                    },
                    "dose": {
                        "type": "string",
                    },
                }
            }
        },

        // ----------------------------------------------------------- Allergy & Tobacco Use -------------------------------------- //
        "smoking": {
            "type": "string",
            "enum": [
                "Yes",
                "No",
            ]
        },
        "frequency": {
            "type": "number",
            "description": "Please enter your height"
        },

        "allergies": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "type": {
                        "type": "string",
                    },
                }
            }
        },

        // ----------------------------------------------------------- Diagnosis -------------------------------------- //
        "physicalExamination": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "sign": {
                        "type": "string",
                    },
                    "symptom": {
                        "type": "string",
                    },
                    "diagnosis": {
                        "type": "string",
                    },
                }
            }
        },
        // ----------------------------------------------------------- Blood Pressure -------------------------------------- //
        "bloodPressure": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "systolic": {
                        "type": "number",
                    },
                    "diastolic": {
                        "type": "number",
                    },
                    "pulse": {
                        "type": "number",
                    },
                    "dateTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                }
            }
        },
        // ----------------------------------------------------------- Blood Glucose -------------------------------------- //
        "bloodGlucose": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "measuringType": {
                        "type": "string",
                        "enum": [
                            "Random",
                            "Fasting"
                        ]
                    },
                    "dateTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                }
            }
        },
        // ----------------------------------------------------------- Lab Test -------------------------------------- //
        "labTest": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "dateTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "labFile": {
                        "type": "string",
                        "format": "data-url"
                    }
                }
            }
        },
        // ----------------------------------------------------------- Radiology -------------------------------------- //
        "radiology": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "scanType": {
                        "type": "string",
                        "enum": [
                            "X-Ray",
                            "CISCA",
                            "MRI"
                        ]
                    },
                    "scanFile": {
                        "type": "string",
                        "format": "data-url"
                    }
                }
            }
        },

        // ----------------------------------------------------------- Medication -------------------------------------- //
        "prescriptionFile": {
            "type": "string",
            "format": "data-url"
        }

    }
}

export const UISchema = {
    "type": "Categorization",
    "elements": [
        {
            "type": "Category",
            "label": "Personal Information",
            "elements": [
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/fullName"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/birthDate"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/gender"
                        },

                    ]
                },
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/weight"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/height"
                        }
                    ]
                },
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/pregnancy",
                            "options": {
                                "format": "radio"
                            }
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/oralContraceptive",
                            "options": {
                                "format": "radio"
                            }
                        }
                    ]
                },

            ]
        },
        {
            "type": "Category",
            "label": "Medical History",
            "elements": [
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "VerticalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/anemia"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/arthritis"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/asthma"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/cancer"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/chronicObstructivePulmonary"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/clottingDisorder"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/congestiveHeartFailure"
                                },
                            ]
                        },
                        {
                            "type": "VerticalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/crhonsDisease"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/depression"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/diabetes"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/emphysema"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/endocrineProblems"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/GERD"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/glucoma"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/hepatitis"
                                },
                            ]
                        },
                        {
                            "type": "VerticalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/HIV-AIDS"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/hypertension"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/kidneyDisease"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/myocardialInfraction"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/pepticUlcerDisease"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/seizures"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/stroke"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/ulcerativeColitis"
                                },

                            ]
                        },
                    ]
                },
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/otherDiseases"
                        }
                    ]
                },
            ],
        },
        {
            "type": "Category",
            "label": "Family history",
            "elements": [
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "VerticalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/familyAnemia",
                                    "label": "Anemia"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/familyDiabetes",
                                    "label": "Diabetes"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/familyBloodClot",
                                    "label": "Blood Clot"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/familyHeartDisease",
                                    "label": "Heart Disease"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/familyStroke",
                                    "label": "Stroke"
                                },
                            ]
                        },
                        {
                            "type": "VerticalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/familyHypertension",
                                    "label": "Hypertension"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/familyAnesthesiaReaction",
                                    "label": "Anesthesia Reaction"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/familyBleedingProblems",
                                    "label": "Bleeding Problems"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/familyHepatitis",
                                    "label": "Hepatitis"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/familyOther",
                                    "label": "Other"
                                },
                            ]
                        },
                    ]
                },
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/familyCancer"
                        }
                    ]
                },
            ],
        },
        {
            "type": "Category",
            "label": "Surgical history",
            "elements": [
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "VerticalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/adrenalGlandSurgery",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/appendectomy",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/bariatricSurgery",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/bladderSurgery",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/breastSurgery",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/cesareanSectionSurgery",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/cholecystectomy",
                                },
                            ]
                        },
                        {
                            "type": "VerticalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/colonSurgery",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/coronaryArteryBypassGraft",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/esophagusSurgery",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/gastricBypassSurgery",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/hemorrhoidSurgery",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/hernia",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/hysterectomyOperation",
                                },

                            ]
                        },
                        {
                            "type": "VerticalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/kidneySurgery",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/neckSurgery",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/prostateSurgery",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/smallIntestineSurgery",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/spineSurgery",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/stomachSurgery",
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/thyroidSurgery",
                                },

                            ]
                        },
                    ]
                },
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/otherSurgeries"
                        }
                    ]
                },
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/medicationHistory"
                        }
                    ]
                },
            ],
        },
        {
            "type": "Category",
            "label": "Allergy & Tobacco Use",
            "elements": [
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/smoking",
                            "options": {
                                "format": "radio"
                            }
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/frequency"
                        },
                    ]
                },
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/allergies"
                        }
                    ]
                },
            ],
        },
        {
            "type": "Category",
            "label": "Diagnosis",
            "elements": [
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/physicalExamination"
                        }
                    ]
                },

            ],
        },
        {
            "type": "Category",
            "label": "Blood Pressure",
            "elements": [
                {
                    "type": "Control",
                    "scope": "#/properties/bloodPressure",
                    "options": {
                        "detail": {
                            "type": "VerticalLayout",
                            "elements": [
                                {
                                    "type": "HorizontalLayout",
                                    "elements": [
                                        {
                                            "type": "Control",
                                            "scope": "#/properties/systolic"
                                        },
                                        {
                                            "type": "Control",
                                            "scope": "#/properties/diastolic"
                                        },
                                        {
                                            "type": "Control",
                                            "scope": "#/properties/pulse"
                                        },
                                        {
                                            "type": "Control",
                                            "scope": "#/properties/dateTime"
                                        },
                                    ]
                                }
                            ]
                        }
                    }
                }
            ]
        },
        {
            "type": "Category",
            "label": "Blood Glucose",
            "elements": [
                {
                    "type": "Control",
                    "scope": "#/properties/bloodGlucose",
                    "options": {
                        "detail": {
                            "type": "VerticalLayout",
                            "elements": [
                                {
                                    "type": "HorizontalLayout",
                                    "elements": [
                                        {
                                            "type": "Control",
                                            "scope": "#/properties/measuringType"
                                        },
                                        {
                                            "type": "Control",
                                            "scope": "#/properties/dateTime"
                                        },
                                    ]
                                }
                            ]
                        }
                    }
                }
            ]
        },
        {
            "type": "Category",
            "label": "Lab Test",
            "elements": [
                {
                    "type": "Control",
                    "scope": "#/properties/labTest",
                    "options": {
                        "detail": {
                            "type": "VerticalLayout",
                            "elements": [
                                {
                                    "type": "HorizontalLayout",
                                    "elements": [
                                        {
                                            "type": "Control",
                                            "scope": "#/properties/dateTime"
                                        },
                                        {
                                            "type": "Control",
                                            "scope": "#/items/properties/labFile",
                                        }

                                    ]
                                }
                            ]
                        }
                    }
                }

            ]
        },
        {
            "type": "Category",
            "label": "Radiology",
            "elements": [
                {
                    "type": "Control",
                    "scope": "#/properties/radiology",
                    "options": {
                        "detail": {
                            "type": "VerticalLayout",
                            "elements": [
                                {
                                    "type": "HorizontalLayout",
                                    "elements": [
                                        {
                                            "type": "Control",
                                            "scope": "#/properties/scanType"
                                        },
                                        {
                                            "type": "Control",
                                            "scope": "#/items/properties/scanFile",
                                        }

                                    ]
                                }
                            ]
                        }
                    }
                }
            ]
        },
        {
            "type": "Category",
            "label": "Current Medication",
            "elements": [
                {
                    "type": "Control",
                    "scope": "#/items/properties/prescriptionFile",
                }
            ]
        },
    ],
    "options": {
        "variant": "stepper"
    }
}