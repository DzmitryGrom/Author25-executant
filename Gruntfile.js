/*global module*/
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        less: {
            dev: {
                files: {
                    'css/home.css': 'less/home.less',
                    'css/black-list.css': 'less/black-list.less',
                    'css/balance.css': 'less/balance.less',
                    'css/main.css': 'less/main.less',
                    'css/forum.css': 'less/forum.less',
                    'css/forum-community.css': 'less/forum-community.less',
                    'css/order-name.css': 'less/order-name.less',
                    'css/all-orders.css': 'less/all-orders.less',
                    'css/settings.css': 'less/settings.less',
                    'css/take-money.css': 'less/take-money.less',
                    'css/test.css': 'less/test.less',
                    'css/search-work.css': 'less/search-work.less',
                    'css/help.css': 'less/help.less',
                    'css/comission.css': 'less/comission.less',
                    'css/profile.css': 'less/profile.less',
                    'css/refer.css': 'less/refer.less',
                    'css/content.css': 'less/content.less'
                }
            }
        },
     
        watch: {
            files: ['less/**/*.less'],
            tasks: ['less']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less']);
};