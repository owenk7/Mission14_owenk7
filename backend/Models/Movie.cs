using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    [Table("Movies")]
    public class Movie
    {
        [Key]
        public int MovieId { get; set; }
        public string Title { get; set; }
        public string Director { get; set; }
        public int Year { get; set; }
        public bool Edited { get; set; }
        public string Category { get; set; }
        public string Rating { get; set; }
        public string LentTo {get; set; }
        public string Notes {get; set; }
    }
}
