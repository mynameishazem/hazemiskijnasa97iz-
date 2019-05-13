
//كود الميوت وفكه
client.on('message', message => {//Toxic Codes
if(message.content.startsWith(prefix + 'mute')){//Toxic Codes
    let role = message.guild.roles.find(r => r.name === 'Muted');//Toxic Codes
    if(!role) message.guild.createRole({name: 'Muted'});//Toxic Codes
     if(user.bot){//Toxic Codes
        return message.channel.send(`I can't mute ${user} because he is a bot`);//Toxic Codes
    }
    if(user.hasPermission('ADMINISTRATOR')) {//Toxic Codes
        return message.channel.send(`I can't mute ${user} because he is staff`);//Toxic Codes
    }//Toxic Codes
   
    if(!user){//Toxic Codes
        message.channel.send(`There's no person to mute tho`);
    }
    message.guild.channels.forEach(f => {//Toxic Codes
        f.overwritePermissions(role, {//Toxic Codes
            SEND_MESSAGES: false
        });
        user.addRole(role);//Toxic Codes
       
    });
     message.channel.send(`I muted ${user}`);
}
});//Toxic Codes
 
 
client.on('message', message => {//Toxic Codes
if(message.content.startsWith(prefix + 'unmute')){//Toxic Codes
    let role = message.guild.roles.find(r => r.name === 'Muted');//Toxic Codes
if(!user.roles.has(role)) {
    return message.channel.send(`He is not muted`);//Toxic Codes
}
    user.removeRole(role).then(message.channel.send(`Unmuted ${user}`));
   
}
}); //Toxic Codes

client.login(process.env.BOT_TOKEN);
