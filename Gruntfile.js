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
                    'css/form.css': 'less/form.less',
                    'css/info.css': 'less/info.less',
                    'css/order-name.css': 'less/order-name.less',
                    'css/all-orders.css': 'less/all-orders.less',
                    'css/settings.css': 'less/settings.less',
                    'css/sell-work.css': 'less/sell-work.less',
                    'css/work.css': 'less/work.less',
                    'css/top-authors.css': 'less/top-authors.less',
                    'css/search-work.css': 'less/search-work.less',
                    'css/payment-services.css': 'less/payment-services.less',
                    'css/help.css': 'less/help.less',
                    'css/select-author.css': 'less/select-author.less',
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