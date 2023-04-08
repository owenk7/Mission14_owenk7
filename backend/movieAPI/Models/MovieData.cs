﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace movieAPI.Data
{
    public class MovieData
    {
        [Key]
        [Required]
        public int MovieId { get; set; }

        public string Category { get; set; }

        public string Title { get; set; }

        public int Year { get; set; }

        public bool Director { get; set; }

        public string Rating { get; set; }

        public string Edited { get; set; }

        public string LentTo { get; set; }
        public string Notes { get; set; }
    }
}