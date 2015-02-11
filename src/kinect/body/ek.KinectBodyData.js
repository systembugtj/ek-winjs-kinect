﻿(function () {
    'use strict';

    /********************
        CONSTRUCTOR 
    *********************/ 
    var constructor = function () {
	   this.pointer = new EkWinjs.KinectPointer(this);
	}
	
    /********************
        INSTANCE DEFINE 
    *********************/ 
    var instanceMembers = {

        /********************
            Public variables 
        *********************/

        id: 0,

        pointer: null,

        pointMultiplier:1,

        trackArea: {
            x: 0.5,
            z: 1,
            dephX: 0.2,
            dephZ: 0.1,
            handPushZ: 0.25
        },

        //hand
        rightHand: { x: 0, y: 0, z: 0 },
        leftHand: { x: 0, y: 0, z: 0 },

        //torso
        head: { x: 0, y: 0, z: 0 },
        neck: { x: 0, y: 0, z: 0 },
        spineShoulder: { x: 0, y: 0, z: 0 },
        spineMid: { x: 0, y: 0, z: 0 },
        spineBase: { x: 0, y: 0, z: 0 },

        //right arm
        shoulderRight: { x: 0, y: 0, z: 0 },
        elbowRight: { x: 0, y: 0, z: 0 },
        wristRight: { x: 0, y: 0, z: 0 },
        handTipRight: { x: 0, y: 0, z: 0 },
        thumbRight: { x: 0, y: 0, z: 0 },

        //left arm
        shoulderLeft: { x: 0, y: 0, z: 0 },
        elbowLeft: { x: 0, y: 0, z: 0 },
        thumbLeft: { x: 0, y: 0, z: 0 },
        wristLeft: { x: 0, y: 0, z: 0 },

        //right leg
        hipRight: { x: 0, y: 0, z: 0 },
        kneeRight: { x: 0, y: 0, z: 0 },
        ankleRight: { x: 0, y: 0, z: 0 },
        footRight: { x: 0, y: 0, z: 0 },

        //left leg
        hipLeft: { x: 0, y: 0, z: 0 },
        kneeLeft: { x: 0, y: 0, z: 0 },
        ankleLeft: { x: 0, y: 0, z: 0 },
        footLeft: { x: 0, y: 0, z: 0 },


        isTracked: false,
        handLeftTracked: false,
        handRightTracked: false,
       

        /********************
            Public methods 
        *********************/
        render: function () {
            this.pointer.render();
        },  

        startSimulate: function () {

            this.pointer.startSimulate();
        },
        
        stopSimulate: function () {
           this.pointer.stopSimulate();
        },


        /********************
            Private variables 
        *********************/
        _name: "",

        /********************
            Private methods 
        *********************/
        _funct: function () {
        }
    };

    /********************
        STATICS 
    *********************/
    var staticMembers = {

    };


    //class definition
    var Class = WinJS.Class.define(constructor, instanceMembers, staticMembers);

    WinJS.Namespace.define("EkWinjs", {
        kinectBodyData: Class
    });

})();


