﻿using Microsoft.Build.Framework;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace HostelManagement.Model
{
    public class UserModel
    {
        [Key]
        public int UserID { get; set; }

        [AllowNull]
        public string UserName { get; set; }

        
        public string UserEmail { get; set; }

        
        public string Password { get; set; }

        [AllowNull]
        public string UserType { get; set; }








    }
}
