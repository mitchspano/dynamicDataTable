
const USE_LIGHTSABER = "Use Lightsaber";
const MIND_TRICK = "Mind Trick";
const SHOOT_FIRST = "Shoot First";
const SPEAK_WOOKIE = "Speak Wookie";
const FORCE_CHOKE = "Force Choke";
const FORCE_LIGHTNING = "Force Lightning";
const FORCE_GHOST = "Force Ghost";

export default function getData() {
    return  [
        {
            name : 'Luke Skywalker',
            profession : 'Jedi Knight',
            rowActions : [
                {
                    label : USE_LIGHTSABER,
                    name : USE_LIGHTSABER
                },
                {
                    label : MIND_TRICK,
                    name : MIND_TRICK
                }
            ]
        },
        {
            name : 'Han Solo',
            profession : 'Smuggler',
            rowActions : [
                {
                    label : SHOOT_FIRST,
                    name : SHOOT_FIRST
                },
                {
                    label : SPEAK_WOOKIE,
                    name : SPEAK_WOOKIE
                }
            ]
        },
        {
            name : 'Obi Wan Kenobi',
            profession : 'Retired Jedi',
            rowActions : [
                {
                    label : USE_LIGHTSABER,
                    name : USE_LIGHTSABER
                },
                {
                    label : MIND_TRICK,
                    name : MIND_TRICK
                },
                {
                    label : FORCE_GHOST,
                    name : FORCE_GHOST
                }
            ]
        },
        {
            name : 'Darth Vader',
            profession : 'Sith Lord',
            rowActions : [
                {
                    label : USE_LIGHTSABER,
                    name : USE_LIGHTSABER
                },
                {
                    label : FORCE_CHOKE,
                    name : FORCE_CHOKE
                }
            ]
        },
        {
            name : 'Darth Sidious',
            profession : 'Emporer',
            rowActions : [
                {
                    label : USE_LIGHTSABER,
                    name : USE_LIGHTSABER
                },
                {
                    label : FORCE_LIGHTNING,
                    name : FORCE_LIGHTNING
                }
            ]
        },
        {
            name : 'Rose Tico',
            profession : 'Mechanic',
            rowActions : []
        }
        
    
      ];
}